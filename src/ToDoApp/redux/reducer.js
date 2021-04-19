import { ConeStriped } from 'react-bootstrap-icons';
import { ADD_TODO, UPDATE_TODO, DELETE_TODO, FINISH_TODO } from './actions';
import { todoS } from './states';

export const reducer = (state = todoS, action) => {
  let newTodoS; //variable searches for all stored values
  let nT; //variable that sets values ​​to localStorage

  switch (action.type) {
    /**
     * Checks Status to add Tasks
     */
    case ADD_TODO:
      newTodoS = [...state];
      console.log(action.payload);
      newTodoS.push(action.payload);
      nT = JSON.stringify(newTodoS);
      localStorage.setItem('newTodoS', nT);
      console.log('salva na localstorage');

      return newTodoS;

    /**
     * Checks Status to update Tasks
     */
    case UPDATE_TODO:
      newTodoS = [...state];
      let index = -1;
      for (let i = 0; i < newTodoS.length; i++) {
        index++;
        if (newTodoS[i].id == action.payload.id) {
          break;
        }
      }
      if (index != -1) {
        newTodoS[index] = action.payload;
        console.log(newTodoS);
        localStorage.clear();
        nT = JSON.stringify(newTodoS);
        localStorage.setItem('newTodoS', nT);
        return newTodoS;
      }

    /**
     * Checks Status to del Tasks
     */
    case DELETE_TODO:
      newTodoS = [...state];
      newTodoS = newTodoS.filter((todo) => todo.id !== action.payload);
      nT = JSON.stringify(newTodoS);
      localStorage.setItem('newTodoS', nT);
      return newTodoS;

    /**
     * Checks Status to finish Tasks
     */
    case FINISH_TODO:
      newTodoS = [...state];
      let indexF = -1;
      for (let i = 0; i < newTodoS.length; i++) {
        indexF++;
        if (newTodoS[i].id == action.payload.id) {
          break;
        }
      }
      if (indexF != -1) {
        newTodoS[indexF] = action.payload;
        console.log(newTodoS);
        localStorage.clear();
        nT = JSON.stringify(newTodoS);
        localStorage.setItem('newTodoS', nT);
        return newTodoS;
      }
  }
  return state;
};
