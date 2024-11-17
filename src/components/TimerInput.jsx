import { useState } from "react";

function TimerInput({ time, addToTime, deleteTime, children }) {
  const zeros = Array(6 - time.length).fill(0);
  const fullTime = zeros.concat(time);

  const buttonStyle = "bg-slate-600 rounded-full h-11 w-11 m-1 text-slate-50";

  return (
    <div className="flex flex-col justify-center items-center m-3">
      <h1 className="font-bold text-xl">{`${fullTime[0]}${fullTime[1]}h ${fullTime[2]}${fullTime[3]}m ${fullTime[4]}${fullTime[5]}s`}</h1>
      <div className="grid grid-cols-3 gap-0">
        <button
          className={buttonStyle}
          type="button"
          onClick={() => addToTime(1)}
        >
          1
        </button>
        <button
          className={buttonStyle}
          type="button"
          onClick={() => addToTime(2)}
        >
          2
        </button>
        <button
          className={buttonStyle}
          type="button"
          onClick={() => addToTime(3)}
        >
          3
        </button>
        <button
          className={buttonStyle}
          type="button"
          onClick={() => addToTime(4)}
        >
          4
        </button>
        <button
          className={buttonStyle}
          type="button"
          onClick={() => addToTime(5)}
        >
          5
        </button>
        <button
          className={buttonStyle}
          type="button"
          onClick={() => addToTime(6)}
        >
          6
        </button>
        <button
          className={buttonStyle}
          type="button"
          onClick={() => addToTime(7)}
        >
          7
        </button>
        <button
          className={buttonStyle}
          type="button"
          onClick={() => addToTime(8)}
        >
          8
        </button>
        <button
          className={buttonStyle}
          type="button"
          onClick={() => addToTime(9)}
        >
          9
        </button>
        <button
          className={buttonStyle}
          type="button"
          onClick={() => addToTime(0)}
        >
          0
        </button>
        <button
          className="bg-slate-400 w-11 h-11 rounded-full m-1"
          type="button"
          onClick={deleteTime}
        >
          {"x"}
        </button>
      </div>
      {children}
    </div>
  );
}

export default TimerInput;
