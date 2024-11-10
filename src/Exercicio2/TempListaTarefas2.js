import React, { useContext } from 'react';
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
  text-decoration: ${(props) => (props.concluida ? 'line-through' : 'none')};
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

function ListaTarefas() {
  const { tarefasFiltradas, marcarConcluida, removerTarefa, ativarEdicao, editarTarefa } = useContext(TodosContext);
  const tarefas = tarefasFiltradas();

  return (
    <ul>
      {tarefas.map((todo) => (
        <TarefaItem key={todo.id}>
          <input
            type="checkbox"
            checked={todo.concluida}
            onChange={() => marcarConcluida(todo.id)}
          />
          {todo.editando ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                editarTarefa(todo.id, todo.texto);
              }}
            >
              <InputEditar
                type="text"
                value={todo.texto}
                onChange={(e) => editarTarefa(todo.id, e.target.value)}
              />
              <BotaoEditar type="submit">Salvar</BotaoEditar>
            </form>
          ) : (
            <>
              <TextoTarefa concluida={todo.concluida}>{todo.texto}</TextoTarefa>
              <BotaoEditar onClick={() => ativarEdicao(todo.id)}>Editar</BotaoEditar>
              <BotaoRemover onClick={() => removerTarefa(todo.id)}>Remover</BotaoRemover>
            </>
          )}
        </TarefaItem>
      ))}
    </ul>
  );
}

export default ListaTarefas;
