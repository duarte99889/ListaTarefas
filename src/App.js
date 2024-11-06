import './App.css';
import CriarTarefa from './components/criarTarefa';
import ListaTarefas from './components/TempListaTarefas';
import React, { useState } from 'react';

function App() {
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

  const editarTarefa = (id, novoTexto) => {
    const novasTarefas = todos.map((todo) =>
      todo.id === id ? { ...todo, texto: novoTexto, editando: false } : todo
    );
    setTodos(novasTarefas);
  };
  
  const ativarEdicao = (id) => {
    const novasTarefas = todos.map((todo) =>
      todo.id === id ? { ...todo, editando: true } : todo
    );
    setTodos(novasTarefas);
  };

  const removeTodo = (id) => {
    const novasTarefas = todos.filter((todo) => todo.id !== id);
    setTodos(novasTarefas);
  };

  const tarefasConcluidas = todos.filter((todo) => todo.concluida);
  const tarefasNaoConcluidas = todos.filter((todo) => !todo.concluida);

  return (
    <div className="app-container">
      <h1>Lista de Tarefas</h1>
      <CriarTarefa adicionarTarefa={adicionarTarefa} />

      <div className="navegacao">
        <button onClick={() => setSecaoAtiva('todas')}>Todas as Tarefas</button>
        <button onClick={() => setSecaoAtiva('naoConcluidas')}>Tarefas Não Concluídas</button>
        <button onClick={() => setSecaoAtiva('concluidas')}>Tarefas Concluídas</button>
      </div>

      {secaoAtiva === 'todas' && (
        <section className="section todas-tarefas">
          <h2>Todas as Tarefas</h2>
          <ListaTarefas
            tarefas={todos}
            removerTarefa={removeTodo}
            editarTarefa={editarTarefa}
            ativarEdicao={ativarEdicao}
            marcarConcluida={marcarConcluida}
          />
        </section>
      )}

      {secaoAtiva === 'naoConcluidas' && (
        <section className="section nao-concluidas">
          <h2>Tarefas Não Concluídas</h2>
          <ListaTarefas
            tarefas={tarefasNaoConcluidas}
            removerTarefa={removeTodo}
            editarTarefa={editarTarefa}
            ativarEdicao={ativarEdicao}
            marcarConcluida={marcarConcluida}
          />
        </section>
      )}

      {secaoAtiva === 'concluidas' && (
        <section className="section concluidas">
          <h2>Tarefas Concluídas</h2>
          <ListaTarefas
            tarefas={tarefasConcluidas}
            removerTarefa={removeTodo}
            editarTarefa={editarTarefa}
            ativarEdicao={ativarEdicao}
            marcarConcluida={marcarConcluida}
          />
        </section>
      )}
    </div>
  );
}

export default App;
