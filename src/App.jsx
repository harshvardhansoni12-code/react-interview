import { useState, useCallback } from "react";
import { SideEffect } from "./component/useEffectUse";
import MemoHook from "./component/UseMemoHook";
import Header from "./component/useCallbackUse";

function App() {
  const [count, setCount] = useState(0);

  const newFn = useCallback(() => {
    console.log("Function called");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Header newFn={newFn} />
      <h1 className="text-2xl font-bold mb-4">Count: {count}</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setCount(count + 1)}
      >
        Increment Count
      </button>
    </div>
  );
}

export default App;
