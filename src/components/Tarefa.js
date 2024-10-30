import React, { useState } from 'react';

const Tarefa = ({ adicionarTarefa }) => {
  const [input, setInput] = useState('');

  const Adiciona = (e) => {
    e.preventDefault();
    if (input) {
      adicionarTarefa(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={Adiciona}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Adiciona uma Tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default Tarefa;
