import { useEffect, useState } from "react";

const SideEffect = () => {
  /*
  here we will use useEffect hook :----
    useEffect is a react hook
    helps in performing side effects in the component
    side effects are operations that can affect 
    other components and cannot be done during rendering
sideeffects:--
fetching data from api
updating the dom
set timer function setTimeout, setInterval
   */

  // no dep array :- use effect will run after every render
  // empty dep array :- use effect will run only on mount
  // dep array with state :- use effect will run only when the state changes
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect called");
  }, []);
  return (
    <>
      <div>Side Effect Component</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        <div>this is count: {count}</div>
      </button>
    </>
  );
};

export { SideEffect };
