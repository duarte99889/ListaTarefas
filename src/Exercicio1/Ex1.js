import React, { useState } from 'react';
import '../App.css';  // Importando o CSS correto
import CriarTarefa from './criarTarefa';
import ListaTarefas from './TempListaTarefas'; // Alterei o nome para refletir sua mudança

function Ex1() {
  const [todos, setTodos] = useState([]);
  const [secaoAtiva, setSecaoAtiva] = useState('todas');
  const [pesquisa, setPesquisa] = useState('');

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

  // Filtrar tarefas com base na pesquisa
  const filtrarTarefas = (tarefas) => {
    if (!pesquisa) return tarefas; // Se não houver pesquisa, retorna todas as tarefas
    return tarefas.filter((tarefa) =>
      tarefa.texto.toLowerCase().includes(pesquisa.toLowerCase())
    );
  };

  return (
    <div className="app-container">
      <h1>Lista de Tarefas 1</h1>
      <CriarTarefa adicionarTarefa={adicionarTarefa} />

      <div className="navegacao">
        <button onClick={() => setSecaoAtiva('todas')}>Todas as Tarefas</button>
        <button onClick={() => setSecaoAtiva('naoConcluidas')}>Tarefas Não Concluídas</button>
        <button onClick={() => setSecaoAtiva('concluidas')}>Tarefas Concluídas</button>
      </div>

      {secaoAtiva === 'todas' && (
        <section className="section todas-tarefas">
          <h2>Todas as Tarefas</h2>
          
          {/* Barra de pesquisa dentro da seção */}
          <div className="barra-pesquisa">
            <input
              type="text"
              placeholder="Pesquisar tarefas..."
              value={pesquisa}
              onChange={(e) => setPesquisa(e.target.value)}
            />
          </div>

          <ListaTarefas
            tarefas={filtrarTarefas(todos)}  // Aplicando o filtro de pesquisa
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
          
          {/* Barra de pesquisa dentro da seção */}
          <div className="barra-pesquisa">
            <input
              type="text"
              placeholder="Pesquisar tarefas..."
              value={pesquisa}
              onChange={(e) => setPesquisa(e.target.value)}
            />
          </div>

          <ListaTarefas
            tarefas={filtrarTarefas(tarefasNaoConcluidas)}  // Aplicando o filtro de pesquisa
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
          
          {/* Barra de pesquisa dentro da seção */}
          <div className="barra-pesquisa">
            <input
              type="text"
              placeholder="Pesquisar tarefas..."
              value={pesquisa}
              onChange={(e) => setPesquisa(e.target.value)}
            />
          </div>

          <ListaTarefas
            tarefas={filtrarTarefas(tarefasConcluidas)}  // Aplicando o filtro de pesquisa
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

export default Ex1;
