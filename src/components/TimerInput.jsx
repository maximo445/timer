import { useState } from "react";

function TimerInput({ time, addToTime, deleteTime }) {
  const zeros = Array(6 - time.length).fill(0);
  const fullTime = zeros.concat(time);

  return (
    <div>
      <h1>{`${fullTime[0]}${fullTime[1]}h ${fullTime[2]}${fullTime[3]}m ${fullTime[4]}${fullTime[5]}s`}</h1>
      <div>
        <button onClick={() => addToTime(1)}>1</button>
        <button onClick={() => addToTime(2)}>2</button>
        <button onClick={() => addToTime(3)}>3</button>
        <button onClick={() => addToTime(4)}>4</button>
        <button onClick={() => addToTime(5)}>5</button>
        <button onClick={() => addToTime(6)}>6</button>
        <button onClick={() => addToTime(7)}>7</button>
        <button onClick={() => addToTime(8)}>8</button>
        <button onClick={() => addToTime(9)}>9</button>
        <button onClick={deleteTime}>delete</button>
      </div>
    </div>
  );
}

export default TimerInput;
