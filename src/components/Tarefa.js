import React from 'react';

const Tarefa = ({ tarefa, remove }) => {
  return (
    <li>
      {tarefa} <button onClick={remove}>Remover</button>
    </li>
  );
};

export default Tarefa;
