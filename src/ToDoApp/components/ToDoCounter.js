import React from 'react';
import { useSelector } from 'react-redux';

/***
 * Component where Tasks are counted according to their status
 */

function ToDoCounter() {
  const todoS = useSelector((state) => state);
  const todoF = todoS.filter((T) => T.completed == true);
  console.log(todoF.length);
  return (
    <div>
      <table className="table text-center">
        <thead className="thead-dark">
          <tr>
            <th>Total de Tarefas</th>
            <th>Tarefas Concluidas</th>
            <th>Tarefas Restantes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{todoS.length}</td>
            <td>{todoF.length}</td>
            <td>{todoS.length - todoF.length}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ToDoCounter;
