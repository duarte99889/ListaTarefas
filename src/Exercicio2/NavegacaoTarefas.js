import React, { useContext } from 'react';
import styled from 'styled-components';
import { TodosContext } from './ContextoTarefa';

const NavegacaoContainer = styled.div`
  margin-top: 20px;
`;

const BotaoNavegacao = styled.button`
  margin: 0 5px;
  padding: 10px 20px;
  border: none;
  background-color: ${(props) => (props.active ? '#697900' : 'yellow')};
  font-weight: bold;
  color: ${(props) => (props.active ? 'black' : 'black')};
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.active ? '#697900' : '#697900')};
  }
`;

function NavegacaoTarefas() {
  const { secaoAtiva, ativarSecao } = useContext(TodosContext);

  return (
    <NavegacaoContainer>
      <BotaoNavegacao active={secaoAtiva === 'todas'} onClick={() => ativarSecao('todas')}>
        Todas as Tarefas
      </BotaoNavegacao>
      <BotaoNavegacao active={secaoAtiva === 'naoConcluidas'} onClick={() => ativarSecao('naoConcluidas')}>
        Tarefas Não Concluídas
      </BotaoNavegacao>
      <BotaoNavegacao active={secaoAtiva === 'concluidas'} onClick={() => ativarSecao('concluidas')}>
        Tarefas Concluídas
      </BotaoNavegacao>
    </NavegacaoContainer>
  );
}

export default NavegacaoTarefas;
