import React from 'react';
import '../App.css';

const Tarefa = ({ tarefa, removerTarefa, editarTarefa, ativarEdicao, marcarConcluida }) => {

  const handleEdit = (e) => {
    e.preventDefault();
    if (e.target.elements.novoTexto.value.trim()) {
      editarTarefa(e.target.elements.novoTexto.value); // Passa o novo texto para a função de edição
    }
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
            name="novoTexto"
            defaultValue={tarefa.texto} // Define o valor padrão como o texto da tarefa
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
