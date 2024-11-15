import { useState } from "react";

function TimerInput() {
  const [time, setTime] = useState([]);

  function addToTime(unit) {
    if (time.length <= 5) {
      setTime((time) => [...time, unit]);
    }
  }

  console.log(time);

  return (
    <div>
      <h1>00h 00m 00s</h1>
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
        <button>delete</button>
      </div>
    </div>
  );
}

export default TimerInput;
