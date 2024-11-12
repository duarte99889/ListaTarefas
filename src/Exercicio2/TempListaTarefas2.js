import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TodosContext } from './ContextoTarefa';

const TarefaItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TextoTarefa = styled.span`
  margin-left: 10px;
  flex-grow: 1;
`;

const BotaoRemover = styled.button`
  background-color: #ff6961;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-left: 10px;

  &:hover {
    background-color: #ff4c4c;
  }
`;

const BotaoEditar = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-left: 10px;

  &:hover {
    background-color: #45a049;
  }
`;

const InputEditar = styled.input`
  flex-grow: 1;
  margin-right: 10px;
  padding: 5px;
`;

const InputPesquisa = styled.input`
  width: 40%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

function ListaTarefas() {
  const {
    tarefasFiltradas,
    marcarConcluida,
    removerTarefa,
    ativarEdicao,
    editarTarefa,
    totalTarefas,
    totalConcluidas,
    totalNaoConcluidas,
    secaoAtiva,
  } = useContext(TodosContext);

  const [novoTexto, setNovoTexto] = useState('');
  const [filtroTexto, setFiltroTexto] = useState(''); // Estado para o filtro de pesquisa

  const handleEditChange = (id, texto) => {
    setNovoTexto(texto);
    ativarEdicao(id);
  };

  const handleEditSubmit = (id) => {
    editarTarefa(id, novoTexto);
    setNovoTexto('');
  };

  const getContadorTexto = () => {
    if (secaoAtiva === 'concluidas') return `Tarefas Concluídas: ${totalConcluidas}`;
    if (secaoAtiva === 'naoConcluidas') return `Tarefas Não Concluídas: ${totalNaoConcluidas}`;
    return `Total de Tarefas: ${totalTarefas}`;
  };

  // Função para filtrar tarefas com base no termo de pesquisa
  const tarefas = tarefasFiltradas().filter((todo) =>
    todo.texto.toLowerCase().includes(filtroTexto.toLowerCase())
  );

  return (
    <div>
      <h3>{getContadorTexto()}</h3>
      
      {/* Barra de pesquisa */}
      <InputPesquisa
        type="text"
        placeholder="Pesquisar tarefas..."
        value={filtroTexto}
        onChange={(e) => setFiltroTexto(e.target.value)}
      />

      <ul>
        {tarefas.map((todo) => (
          <TarefaItem key={todo.id}>
            <input
              type="checkbox"
              checked={todo.concluida}
              onChange={() => marcarConcluida(todo.id)}
            />
            {todo.editando ? (
              <>
                <InputEditar
                  type="text"
                  value={novoTexto}
                  onChange={(e) => setNovoTexto(e.target.value)}
                />
                <BotaoEditar onClick={() => handleEditSubmit(todo.id)}>Salvar</BotaoEditar>
              </>
            ) : (
              <>
                <TextoTarefa concluida={todo.concluida}>{todo.texto}</TextoTarefa>
                <BotaoEditar onClick={() => handleEditChange(todo.id, todo.texto)}>Editar</BotaoEditar>
                <BotaoRemover onClick={() => removerTarefa(todo.id)}>Remover</BotaoRemover>
              </>
            )}
          </TarefaItem>
        ))}
      </ul>
    </div>
  );
}

export default ListaTarefas;
