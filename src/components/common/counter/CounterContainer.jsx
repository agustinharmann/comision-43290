import { useState } from 'react';
import { Counter } from './Counter';

const CounterContainer = ({ agregarAlCarrito, stock, cantidadEnCarrito }) => {
  const [counter, setCounter] = useState(cantidadEnCarrito || 1);

  return (
    <Counter
      counter={counter}
      setCounter={setCounter}
      agregarAlCarrito={agregarAlCarrito}
      stock={stock}
    />
  );
};

export { CounterContainer };
