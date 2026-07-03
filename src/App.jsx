import React, { useState } from "react";

const UseCallbackUse = () => {
  const [count, setCount] = useState(0);
  /*
  it is used to memoize the function so that
   it does not get recreated on every render
  */
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment
      </button>
    </>
  );
};

export default UseCallbackUse;
