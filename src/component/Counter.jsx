import { useState } from "react";

const Counter = () => {
  //this line is create a state;
  const [count, setCount] = useState(10);
  const incrementHandler = () => setCount(count + 1);
  const decrementHandler = () => setCount(count - 1);
  const resetHandler = () => setCount(10);

  return (
    <>
      <h1>counter</h1>
      <h2>{count}</h2>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}> decrement</button>
      <button onClick={resetHandler}>reset</button>
    </>
  );
};
export default Counter;
