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

import { useMemo, useState } from "react";

export default function MemoHook() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const result = useMemo(() => {
    console.log("useMemo callback");
    return number * number * number;
  }, [number]);

  return (
    <>
      <input
        type="number"
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <h1>{result}</h1>

      <button onClick={() => setCount((c) => c + 1)}>Counter++</button>

      <h2>{count}</h2>
    </>
  );
}
