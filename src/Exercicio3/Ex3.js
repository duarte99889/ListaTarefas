import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { deposito, levantamento } from './Slice';

const Botao = styled.button`
margin: 0 5px;
padding: 10px 20px;
border: none;
background-color: 'grey';
font-weight: bold;
color: 'black';
font-size: 26px;
cursor: pointer;
border-radius: 4px;
`;

const SaldoAtual = styled.h1`
text-align: center
`;

const ColocarValor = styled.input`
  width: 70%;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 18px;
  margin: 20px;
`

function Ex3() {
    const dispatch = useDispatch();
    const saldo = useSelector((state) => state.saldo.balance);
    const [valor, setValor] = useState('');

    const trataDeposito = () => {
        dispatch(deposito(Number(valor)));
        setValor(''); 
    };

    const trataLevantamento = () => {
        dispatch(levantamento(Number(valor)));
        setValor(''); 
    };

    return ( 
        <SaldoAtual>
            <SaldoAtual>Saldo Atual: {saldo}€</SaldoAtual>
            <ColocarValor
                type="number"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
            />
            <div>
            <Botao onClick={trataDeposito}>Depositar</Botao>
            <Botao onClick={trataLevantamento}>Levantar</Botao>
            </div>
        </SaldoAtual>
    );
}

export default Ex3;
