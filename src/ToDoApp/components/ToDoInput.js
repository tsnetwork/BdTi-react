import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Icon from 'react-bootstrap-icons';
import { v1 as uuid } from 'uuid';
import { addTodo } from '../redux/actions';

/**
 * Conponent responsible for inserting the Tasks
 *
 * @returns TodoInput;
 */

function ToDoInput() {
  const [name, setName] = useState();
  const dispatch = useDispatch();
  return (
    <div>
      <div className="row m-2">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="col form-control"
        />
        <button
          disabled={!name}
          className="btn btn-primary mx-2"
          onClick={() => {
            dispatch(addTodo({ id: uuid(), name, completed: false }));
            setName();
          }}
        >
          <Icon.PlusSquare /> Adicionar
        </button>
      </div>
    </div>
  );
}

export default ToDoInput;
