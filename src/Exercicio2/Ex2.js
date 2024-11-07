// Ex2.js
import React from 'react';
import styled from 'styled-components';
import CriarTarefa from './criarTarefa2';
import ListaTarefas from './TempListaTarefas2';
import NavegacaoTarefas from './NavegacaoTarefas';
import { TodosProvider } from './ContextoTarefa';

const AppContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 800px;
  text-align: center;
`;

const Titulo = styled.h1`
  color: #333;
`;

function Ex2() {
  return (
    <TodosProvider>
      <AppContainer>
        <Titulo>Lista de Tarefas 2</Titulo>
        <CriarTarefa />
        <NavegacaoTarefas />
        <ListaTarefas />
      </AppContainer>
    </TodosProvider>
  );
}

export default Ex2;
