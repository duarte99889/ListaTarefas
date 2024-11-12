import React, { createContext, useState } from 'react';

export const TodosContext = createContext();

export function TodosProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [secaoAtiva, setSecaoAtiva] = useState('todas');

  const adicionarTarefa = (texto) => {
    setTodos([...todos, { id: Date.now(), texto, concluida: false, editando: false }]);
  };

  const marcarConcluida = (id) => {
    const novasTarefas = todos.map((todo) =>
      todo.id === id ? { ...todo, concluida: !todo.concluida } : todo
    );
    setTodos(novasTarefas);
  };

  const removerTarefa = (id) => {
    const novasTarefas = todos.filter((todo) => todo.id !== id);
    setTodos(novasTarefas);
  };

  const ativarEdicao = (id) => {
    const novasTarefas = todos.map((todo) =>
      todo.id === id ? { ...todo, editando: !todo.editando } : todo
    );
    setTodos(novasTarefas);
  };

  const editarTarefa = (id, novoTexto) => {
    const novasTarefas = todos.map((todo) =>
      todo.id === id ? { ...todo, texto: novoTexto, editando: false } : todo
    );
    setTodos(novasTarefas);
  };

  const ativarSecao = (secao) => {
    setSecaoAtiva(secao);
  };

  const tarefasFiltradas = () => {
    if (secaoAtiva === 'concluidas') return todos.filter((todo) => todo.concluida);
    if (secaoAtiva === 'naoConcluidas') return todos.filter((todo) => !todo.concluida);
    return todos;
  };


  const totalTarefas = todos.length;
  const totalConcluidas = todos.filter((todo) => todo.concluida).length;
  const totalNaoConcluidas = todos.filter((todo) => !todo.concluida).length;

  const value = {
    todos,
    adicionarTarefa,
    marcarConcluida,
    removerTarefa,
    ativarEdicao,
    editarTarefa,
    ativarSecao,
    tarefasFiltradas,
    totalTarefas,
    totalConcluidas,
    totalNaoConcluidas,
    secaoAtiva,
  };

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>;
}


