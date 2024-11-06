import React, { useState } from 'react';
import Tarefa from './Tarefa';

const ListaTarefas = ({ tarefas, removerTarefa, editarTarefa, ativarEdicao, marcarConcluida }) => {
  const [termoPesquisa, setTermoPesquisa] = useState('');

  const tarefasFiltradas = tarefas.filter((tarefa) =>
    tarefa.texto.toLowerCase().includes(termoPesquisa.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Pesquisar tarefas..."
        value={termoPesquisa}
        onChange={(e) => setTermoPesquisa(e.target.value)}
        className="campo-pesquisa"
      />

      <ul>
        {tarefasFiltradas.map((tarefa) => (
          <Tarefa
            key={tarefa.id} 
            tarefa={tarefa}
            removerTarefa={() => removerTarefa(tarefa.id)}
            editarTarefa={(novoTexto) => editarTarefa(tarefa.id, novoTexto)}
            ativarEdicao={() => ativarEdicao(tarefa.id)}
            marcarConcluida={() => marcarConcluida(tarefa.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListaTarefas;
