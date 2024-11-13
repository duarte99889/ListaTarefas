import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deposito, levantamento } from './Slice';

function Ex3() {
    const dispatch = useDispatch();
    const saldo = useSelector((state) => state.saldo.balance);
    const [valor, setValor] = useState('');

    const trataDeposito = () => {
        dispatch(deposito(Number(valor)));
        setValor(''); // Limpa o input após o depósito
    };

    const trataLevantamento = () => {
        dispatch(levantamento(Number(valor)));
        setValor(''); // Limpa o input após o levantamento
    };

    return ( 
        <div>
            <h2>Saldo Atual: {saldo}</h2>
            <input
                type="number"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
            />
            <button onClick={trataDeposito}>Depositar</button>
            <button onClick={trataLevantamento}>Levantar</button>
        </div>
    );
}

export default Ex3;
