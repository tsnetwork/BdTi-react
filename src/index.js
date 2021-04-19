import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ToDo from './ToDoApp/App';
import { store } from './ToDoApp/redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToDo />
    </Provider>
  </React.StrictMode>,

  document.getElementById('root'),
);
