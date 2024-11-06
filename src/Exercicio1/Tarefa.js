import React, { useState } from 'react';

const Tarefa = ({ tarefa, removerTarefa, editarTarefa, ativarEdicao, marcarConcluida }) => {
  const [novoTexto, setNovoTexto] = useState(tarefa.texto);

  const handleEdit = (e) => {
    e.preventDefault();
    editarTarefa(novoTexto);
  };

  return (
    <li>
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
          <button onClick={removerTarefa}>Remover</button>
        </>
      )}
    </li>
  );
};

export default Tarefa;
