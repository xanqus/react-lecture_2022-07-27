import React, { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Counter counter={counter} setCounter={setCounter} />
    </>
  );
};

export default App;
