import { useState } from "react";

function UseStateUse() {
  const [color, setColor] = useState("green");
  const [count, setCount] = useState(0);
  /*
UseState :-
useState is a react hooks
helps in change the state of the component
and re-render the component when the state changes
*/
  const increment = () => {
    setCount(count + 1); // 0+1
    setCount(count + 1); // 0+1
    setCount(count + 1); // 0+1
    /* above code will not work as expected because 
 react batches the state updates and only takes the last one, 
 so the count will be 1 instead of 3 */
  };

  const incrementFunctional = () => {
    setCount((prevCount) => prevCount + 1); // 0+1
    setCount((prevCount) => prevCount + 1); // 1+1
    setCount((prevCount) => prevCount + 1); // 2+1
    /* above code will work as expected because 
 react batches the state updates and takes the previous state, 
 so the count will be 3 instead of 1 */
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      // style={{ backgroundColor: color }}
    >
      <div>this is count: {count}</div>
      <button
        className="px-4 py-2 bg-black text-white rounded"
        onClick={increment}
      >
        Increment Count
      </button>
      <button
        className="px-4 py-2 bg-black text-white rounded"
        onClick={incrementFunctional}
      >
        Increment Count (Functional)
      </button>
    </div>
  );
}

export default UseStateUse;
