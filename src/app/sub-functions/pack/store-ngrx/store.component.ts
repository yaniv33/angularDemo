import { Component } from '@angular/core';
import {IAppState} from "./ngrx-store";
import {NgRedux, select} from "ng2-redux";
import {ADD_TODO, INCREMENT, REMOVE_ALL_TODOS, REMOVE_TODO, TOGGLE_TODO} from "./ngrx-actions";
import { ITodo } from './ngrx-todo';
import {MyAppState} from "./ngrx-store2";


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
// npm install redux ng2-redux


// the other library to word with is store , had some issues
        // $ npm install @ngrx/core
        // $ npm install @ngrx/store
        // $ npm install @ngrx/effects

export class StoreComponent{

  // @select('todos') my-todos; // this syntex should be valid but not working ..
  @select() todos;
  @select() lastUpdate;
  // @select() count;

  model: ITodo = { // this model is to bind with the form , and as set as array so we could easyly use
    id: 0,
    description: '',
    responsible: '',
    priority: 'low',
    isCompleted: false
  };

  constructor(private ngRedux : NgRedux<IAppState>,
              private ngRedux2 : NgRedux<MyAppState>){ // not possible to create second store this way ..
  }

  clearTodos() {
    this.ngRedux.dispatch({type: REMOVE_ALL_TODOS}); // all that is sent in the array is recived by the action  , the state remains the same
  }

  obSubmit() {
    console.log(this.model);
    this.ngRedux.dispatch({type: ADD_TODO, todo: this.model});
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({type: REMOVE_TODO, id: todo.id });
  }

  inc(){

  }
  dec(){

  }

}
