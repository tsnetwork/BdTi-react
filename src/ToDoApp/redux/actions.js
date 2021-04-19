export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const FINISH_TODO = 'FINISH_TODO';

/**
 *  Functions created according to each Tasks Status
 */

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export function delTodo(todoId) {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
}

export function updateTodo(todo) {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
}

export function finishTodo(todo) {
  return {
    type: FINISH_TODO,
    payload: todo,
  };
}
