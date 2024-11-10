import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TodosContext } from './ContextoTarefa';

const InputContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  width: 70%;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 18px;
`;

const BotaoAdicionar = styled.button`
  padding: 12px 20px;
  border: none;
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
  font-weight: bold;
  font-size: 18px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ccc;
  }
`;

function CriarTarefa() {
  const [texto, setTexto] = useState('');
  const { adicionarTarefa } = useContext(TodosContext);

  const handleAdicionar = () => {
    adicionarTarefa(texto);
    setTexto('');
  };

  return (
    <InputContainer>
      <Input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nova tarefa"
      />
      <BotaoAdicionar onClick={handleAdicionar}>Adicionar</BotaoAdicionar>
    </InputContainer>
  );
}

export default CriarTarefa;
