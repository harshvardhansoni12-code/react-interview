import { useState } from "react";
import { SideEffect } from "./component/useEffectUse";
import MemoHook from "./component/UseMemoHook";
function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <MemoHook />
    </div>
  );
}

export default App;
