import React, { useState } from 'react';

const Tarefa = ({ tarefa, removerTarefa, editarTarefa, ativarEdicao, marcarConcluida }) => {
  // Estado local para armazenar o texto temporário da tarefa
  const [novoTexto, setNovoTexto] = useState(tarefa.texto);

  // Função chamada ao submeter o formulário de edição
  const handleEdit = (e) => {
    e.preventDefault(); // Evita o comportamento padrão de envio de formulário
    editarTarefa(tarefa.id, novoTexto); // Passa id e novoTexto ao contexto ao salvar
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={() => marcarConcluida(tarefa.id)}
      />
      {tarefa.editando ? (
        <form onSubmit={handleEdit}>
          <input
            type="text"
            value={novoTexto}
            onChange={(e) => setNovoTexto(e.target.value)} // Atualiza apenas o estado local
          />
          <button type="submit">Salvar</button>
        </form>
      ) : (
        <>
          <span>{tarefa.texto}</span>
          <button onClick={() => ativarEdicao(tarefa.id)}>Editar</button>
          <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
        </>
      )}
    </li>
  );
};

export default Tarefa;
