import React, { useState, useEffect } from "react";

const Counter = ({ counter, setCounter }) => {
  const addCounter = () => {
    setCounter(counter + 1);
  };
  console.log(counter);
  // API 호출 코드

  useEffect(() => {
    console.log("API 호출");
  }, []);

  return (
    <div>
      <div>{counter}번 클릭했습니다</div>
      <button onClick={addCounter}>+</button>
    </div>
  );
};

export default Counter;
