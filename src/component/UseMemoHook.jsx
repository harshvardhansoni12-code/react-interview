/*
useMemo is a react hook
returns momoized value (catching a value)
so that it does not re-compute 
the value on every render

only runs when one of the 
dependencies has changed

improves performance of the application

UseMemo hook and UseCallback hook are similar
useMemo returns a memoized value
useCallback returns a memoized function
 */
import React, { useState, useMemo } from "react";

export default function MemoHook() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  //
  function cubeNum(num) {
    console.log("Calculating cube of number");
    return Math.pow(num, 3);
  }
  //
  const result = cubeNum(number);
  return (
    <>
      <div>Memo Hook Component</div>
      <input
        type="number"
        placeholder="Enter a number"
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <div>cube of number:{result}</div>

      <button onClick={increment}>Counter++</button>
      <div>Counter:{count}</div>
    </>
  );
}
