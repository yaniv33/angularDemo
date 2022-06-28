import { Component } from '@angular/core';
import {Task, TaskDialogResult} from '../task';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import {MatDialog} from "@angular/material/dialog";
import {TaskDialogComponent} from "../task-dialog/task-dialog.component";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";


@Component({
  selector: 'app-fire-base',
  templateUrl: './fire-base.component.html',
  styleUrls: ['../firebase-app.component.scss']
})


// https://developers.google.com/codelabs/building-a-web-app-with-angular-and-firebase#0
// https://github.com/FirebaseExtended/codelab-kanban-fire/tree/adding-firebase-to-the-project


// ng add @angular/fire
// npm install -g firebase-tools
// firebase login --reauth
//


export class FireBaseComponent {

  todo =       this.store.collection('todo').      valueChanges({ idField: 'id' }) as Observable<Task[]>;
  inProgress = this.store.collection('inProgress').valueChanges({ idField: 'id' }) as Observable<Task[]>;
  done =       this.store.collection('done').      valueChanges({ idField: 'id' }) as Observable<Task[]>;

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
        this.store.collection('todo').add(result.task);
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
      // debugger;
      if (!result) {
        return;
      }
      if (result.delete) {
        this.store.collection(list).doc(task.id).delete();
      } else {
        this.store.collection(list).doc(task.id).update(task);
      }
    });
  }


  drop(event: CdkDragDrop<any>): void {
    // debugger;
  // drop(event: CdkDragDrop<Task[]>): void {
    if (event === null || event.previousContainer === null)
      return;
    if (event.previousContainer === event.container) {
      return;
    }
    const item = event.previousContainer.data[event.previousIndex];
    this.store.firestore.runTransaction(() => {
      const promise = Promise.all([
        this.store.collection(event.previousContainer.id).doc(item.id).delete(),
        this.store.collection(event.container.id).add(item),
      ]);
      return promise;
    });
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  // drop(event: CdkDragDrop<Task[]>): void {
  //   if (event.previousContainer === event.container) {
  //     return;
  //   }
  //   if (!event.container.data || !event.previousContainer.data) {
  //     return;
  //   }
  //   transferArrayItem(
  //     event.previousContainer.data,
  //     event.container.data,
  //     event.previousIndex,
  //     event.currentIndex
  //   );
  // }


}
