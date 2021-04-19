import React from 'react';
import { useSelector } from 'react-redux';

import TodoItem from './ToDoItem'; //Imported Component TodoItem

/**
 * Conponent responsible for listing all Tasks through props
 * of the TodoItem component
 * @returns ToDoList
 */
function ToDoList() {
  const todos = useSelector((state) => state);
  console.log(todos);
  return (
    <div className="row row-cols-3 row-cols-md-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default ToDoList;
