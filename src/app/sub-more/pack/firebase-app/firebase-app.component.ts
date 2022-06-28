import {Component, ViewEncapsulation} from '@angular/core';
import {Task, TaskDialogResult} from './task';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import {MatDialog} from "@angular/material/dialog";
import {TaskDialogComponent} from "./task-dialog/task-dialog.component";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-firebase-app',
  templateUrl: './firebase-app.component.html',
  styleUrls: ['./firebase-app.component.scss']
  ,encapsulation: ViewEncapsulation.None // must add this so mat field would notice scss
})

// https://developers.google.com/codelabs/building-a-web-app-with-angular-and-firebase#0
// https://github.com/FirebaseExtended/codelab-kanban-fire/tree/adding-firebase-to-the-project


// ng add @angular/fire
// npm install -g firebase-tools
// firebase login --reauth
//


export class FirebaseAppComponent{

  todo: Task[] = [
    {
      title: 'Buy milk',
      description: 'Go to the store and buy milk'
    },
    {
      title: 'Create a Kanban app',
      description: 'Using Firebase and Angular create a Kanban app!'
    }
  ];

  // todo: Task[] = [];
  inProgress: Task[] = [];
  done: Task[] = [];

  constructor(private dialog: MatDialog,
              private store: AngularFirestore) { }

  newTask(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: TaskDialogResult|undefined) => {
        if (!result) {
          return;
        }
        this.todo.push(result.task);
      });
  }

// editTask(list: string, task: Task): void {}
  editTask(list: 'done' | 'todo' | 'inProgress', task: Task): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task,
        enableDelete: true,
      },
    });
    dialogRef.afterClosed().subscribe((result: TaskDialogResult|undefined) => {
      if (!result) {
        return;
      }
      const dataList = this[list];
      const taskIndex = dataList.indexOf(task);
      if (result.delete) {
        dataList.splice(taskIndex, 1);
      } else {
        dataList[taskIndex] = task;
      }
    });
  }


  drop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) {
      return;
    }
    if (!event.container.data || !event.previousContainer.data) {
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }


}
