import { useReducer, useState } from "react";

const exampleReducer = () => {
  const [state, setState] = useState(0);

  const increment = () => {
    setState((state) => state + 1);
  };

  const decrement = () => {
    setState((state) => state - 1);
  };

  return (
    <div>
      <div>{state}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
