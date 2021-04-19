/***
 * Searches for values ​​stored in LocalStorage,
 * if not, an empty array is returned
 */

const newTodoS = JSON.parse(localStorage.getItem('newTodoS'));
export const todoS = newTodoS ? newTodoS : [];
