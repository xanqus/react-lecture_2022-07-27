import React, { useState } from "react";
import Counter from "./components/Counter";
import Converter from "./components/Converter";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Counter counter={counter} setCounter={setCounter} />
      <Converter counter={counter} />
    </>
  );
}

export default App;
