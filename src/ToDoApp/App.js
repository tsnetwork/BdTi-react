import React from 'react';

import TodoList from './components/ToDoList';
import ToDoInput from './components/ToDoInput';

import 'bootstrap/dist/css/bootstrap.css';
import ToDoCounter from './components/ToDoCounter';

function App() {
  return (
    <div className="container">
      <h1 className="display-4 text-center">ToDo App</h1>
      <ToDoInput />
      <ToDoCounter />

      <TodoList />
    </div>
  );
}

export default App;
