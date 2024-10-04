import React, { useState } from 'react'

export default function Count() {
  // Inicializa o estado com o valor 0
  const [contador, setContador] = useState(0);

  // Função para aumentar o valor do estado
  const aumentar = () => {
    setContador(contador + 1);
  }

  const diminiur = () => {
    setContador(contador - 1);
  }

  return (
    <div>
        <p>
          {contador}
        </p>
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={diminiur}>Diminuir</button>
    </div>
  )
}
