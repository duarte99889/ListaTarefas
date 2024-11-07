import React, { useContext, useState } from 'react';
import { TodosContext } from './ContextoTarefa';

function CriarTarefa() {
  const [texto, setTexto] = useState('');
  const { adicionarTarefa } = useContext(TodosContext);

  const handleAdicionar = () => {
    adicionarTarefa(texto);
    setTexto('');
  };

  return (
    <div>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={handleAdicionar}>Adicionar Tarefa</button>
    </div>
  );
}

export default CriarTarefa;
