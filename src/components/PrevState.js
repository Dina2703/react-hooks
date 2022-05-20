import { useState } from "react";

function PrevState() {
  const [counter, setCounter] = useState(0);
  const [disable, setDisable] = useState(true);
  const handleIncrease = () => {
    setCounter(counter + 1);
    setDisable(false);
  };

  const handleDecrease = () => {
    if (counter === 0) {
      setDisable(true);
      return;
    } else {
      setDisable(false);
      setCounter(counter - 1);
    }
  };

  // const handlePrevState = () => {
  //   for (let i = 0; i < 5; i++) {
  //     setCounter((prevState) => prevState + 1);
  //   }
  // };
  //version 2
  const handlePrevState = () => {
    setCounter((prevState) => prevState + 5);
  };

  return (
    <div className="container">
      <h3>➡️ Example with useState().</h3>
      <button className="btn btn-danger p-2 m-2" onClick={handleIncrease}>
        Increase
      </button>
      <button
        className="btn btn-success p-2"
        onClick={handleDecrease}
        disabled={disable}
      >
        Decrease
      </button>
      <button className="btn btn-success p-2 m-2" onClick={handlePrevState}>
        add by 5
      </button>
      <p className="mt-4 border border-primary w-25 text-center">{counter}</p>
    </div>
  );
}

export default PrevState;
