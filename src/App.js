import './App.css';
import CriarTarefa from './components/criarTarefa';
import ListaTarefas from './components/TempListaTarefas';
import React, { useState } from 'react';


function App() {
  const [todos, setTodos] = useState([]);

  const adicionarTarefa = (todo) => {
    setTodos([...todos, todo]);
  };
  

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <CriarTarefa adicionarTarefa={adicionarTarefa} />
      <ListaTarefas tarefas={todos} removerTarefa={removeTodo} />
      </div>
  );
}

export default App;