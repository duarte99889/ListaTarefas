import React, { useState } from 'react';

const Tarefa = ({ tarefa, remove, editar, ativarEdicao, marcarConcluida }) => {
  const [novoTexto, setNovoTexto] = useState(tarefa.texto);

  const handleEdit = (e) => {
    e.preventDefault();
    editar(tarefa.index, novoTexto); // Passar o índice da tarefa
  };

  return (
    <li style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={marcarConcluida}
      />
      {tarefa.editando ? (
        <form onSubmit={handleEdit}>
          <input
            type="text"
            value={novoTexto}
            onChange={(e) => setNovoTexto(e.target.value)}
          />
          <button type="submit">Salvar</button>
        </form>
      ) : (
        <>
          <span>{tarefa.texto}</span>
          <button onClick={ativarEdicao}>Editar</button>
          <button onClick={remove}>Remover</button>
        </>
      )}
    </li>
  );
};

export default Tarefa;
