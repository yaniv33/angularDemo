import {DECREMENT, INCREMENT} from "./ngrx-actions";
import {props ,createAction} from '@ngrx/store'

export interface MyAppState {
  count: number;
  lastUpdate: Date;
}

// export const INITIAL_STATE_2: MyAppState = {
//   count: 0,
//   lastUpdate: null
// };


// state holds the current data
// action holds whatevere was sent in the dispatch
export function myrootReducer(state: MyAppState, action): MyAppState {

console.log(state ,action)
  switch (action.type) {
    case INCREMENT:
      // action.todo.id = state.todos.length + 1;
      //
      // return Object.assign({}, state, {
      //   todos: state.todos.concat(Object.assign({}, action.todo)),
      //   lastUpdate: new Date()
      // });
      break;

    case DECREMENT:
      // const todo = state.todos.find(t => t.id === action.id);
      //
      // const index = state.todos.indexOf(todo);
      // return Object.assign({}, state, {
      //   todos: [
      //     ...state.todos.slice(0, index),
      //     Object.assign({}, todo, {isCompleted: !todo.isCompleted}),
      //     ...state.todos.slice(index + 1)
      //   ],
      //   lastUpdate: new Date()
      // });

    // case REMOVE_TODO:
    //   return Object.assign({}, state, {
    //     todos: state.todos.filter(t => t.id !== action.id),
    //     lastUpdate: new Date()
    //   });
    //
    // case REMOVE_ALL_TODOS:
    //   return Object.assign({}, state, {
    //     todos: [],
    //     lastUpdate: new Date()
    //   });
  }
  return state;
}



