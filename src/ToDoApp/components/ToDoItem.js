import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Icon from 'react-bootstrap-icons';

import { delTodo, updateTodo, finishTodo } from '../redux/actions';

/**
 * Component where each Task is configured and edited
 */

function ToDoItem({ todo }) {
  const [editable, setEditable] = useState(false);
  const [finished, setFinish] = useState(false);
  const [name, setName] = useState(todo.name);
  const dispatch = useDispatch();

  return (
    <div className="col mb-4">
      <div className="card mt-2 shadow">
        <div
          className={`card-header ${todo.completed ? 'bg-success' : 'bg-info'}`}
        >
          <div maxLength="5">#{todo.id.substr(0, 8)}</div>{' '}
        </div>
        <div className={`card-body ${todo.completed ? 'bg-success' : ''}`}>
          {editable ? (
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <p title={todo.name} maxLength="30" className="font-italic">
              {todo.name.substr(0, 15)}
            </p>
          )}
        </div>
        <div
          className={`card-footer text-right ${
            todo.completd ? 'bg-success' : 'bg-dark'
          }`}
        >
          <button
            disabled={editable || todo.completed}
            title="Conclui a Tarefa"
            className="btn btn-sm btn-success"
            onClick={() => {
              dispatch(
                finishTodo({
                  ...todo,
                  name,
                  completed: true,
                }),
              );
              setFinish(!finished);
            }}
          >
            <Icon.ClipboardCheck />
          </button>
          <button
            className="btn btn-sm btn-warning"
            disabled={todo.completed}
            title="Edita a Tarefa"
            onClick={() => {
              dispatch(
                updateTodo({
                  ...todo,
                  name,
                }),
              );
              if (editable) {
                setName(todo.name);
              }
              setEditable(!editable);
            }}
          >
            {editable ? <Icon.Wrench /> : <Icon.PencilSquare />}
          </button>
          <button
            title="Exclui a Tarefa"
            className="btn btn-sm btn-danger"
            disabled={editable || todo.completed}
            onClick={() => dispatch(delTodo(todo.id))}
          >
            <Icon.Eraser />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
