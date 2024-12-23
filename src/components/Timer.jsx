import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faTrash } from "@fortawesome/free-solid-svg-icons";

const formatTime = (seconds) => {
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
};

function Timer({ time, id, deleteTimer }) {
  const [totalTime, setTotalTime] = useState(0);
  const [done, setDone] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const displayTime = useRef();
  const originalTime = useRef();
  const playStop = useRef();

  useEffect(() => {
    function calcTotalTime() {
      let total = 0;
      if (time.length === 1) {
        total += +`${time[0]}`;
      }
      if (time.length === 2) {
        total += +`${time[time.length - 2]}${time[time.length - 1]}`;
      }
      if (time.length === 3) {
        total += +`${time[time.length - 2]}${time[time.length - 1]}`;
        total += +`${time[time.length - 3]}` * 60;
      }
      if (time.length === 4) {
        total += +`${time[time.length - 2]}${time[time.length - 1]}`;
        total += +`${time[time.length - 4]}${time[time.length - 3]}` * 60;
      }
      if (time.length === 5) {
        total += +`${time[time.length - 2]}${time[time.length - 1]}`;
        total += +`${time[time.length - 4]}${time[time.length - 3]}` * 60;
        total += +`${time[time.length - 5]}` * 360;
      }
      if (time.length === 6) {
        total += +`${time[time.length - 2]}${time[time.length - 1]}`;
        total += +`${time[time.length - 4]}${time[time.length - 3]}` * 60;
        total += +`${time[time.length - 6]}${time[time.length - 5]}` * 3600;
      }
      setTotalTime(total);
      displayTime.current = formatTime(total);
      originalTime.current = total;
    }
    calcTotalTime();
  }, [time]);

  useEffect(() => {
    if (totalTime === 0) {
      if (playStop.current) clearInterval(playStop.current);
      if (playStop.current) setDone(true);
    }
  }, [totalTime]);

  function runTimer() {
    setIsRunning(true);
    playStop.current = setInterval(() => {
      setTotalTime((totalTime) => (totalTime -= 1));
    }, 1000);
  }

  function stopTimer() {
    clearInterval(playStop.current);
    setIsRunning(false);
  }

  function add100() {
    setTotalTime((totalTime) => (totalTime += 60));
    setDone(false);
  }

  function reset() {
    setTotalTime(originalTime.current);
    stopTimer();
    setDone(false);
  }

  const timeFormatted = formatTime(totalTime);
  // const timeDisplay = formatTime(originalTime.current);
  console.log(originalTime.current);

  return (
    <div
      className={`flex flex-col justify-center items-center w-full h-auto p-8 rounded-lg ${
        done
          ? "animate-colorPulse"
          : "bg-gradient-to-b from-cyan-700 via-cyan-800 to-cyan-950"
      }`}
    >
      <div className="flex justify-between mb-8 w-full px-4">
        <h1>{displayTime.current}</h1>
        <button
          className="bg-slate-600 w-7 h-7 rounded-full"
          onClick={() => deleteTimer(id)}
        >
          <FontAwesomeIcon icon={faTrash} className="pause-icon" />
        </button>
      </div>
      <div>
        <h1 className="text-4xl border border-red-500 border-8 w-52 h-52 flex justify-center items-center rounded-full">
          {timeFormatted}
        </h1>
        <div className="w-full flex justify-center items-center">
          <button
            className={`my-4  font-bold text-2xl ${
              done ? "text-slate-50" : "text-red-500"
            }`}
            onClick={reset}
          >
            reset
          </button>
        </div>
      </div>
      <div className="flex gap-5">
        <button
          className="bg-slate-600 px-4 py-4 w-32  rounded-full flex justify-center items-center"
          onClick={add100}
        >
          +1:00
        </button>
        {!done && (
          <div>
            {isRunning ? (
              <button
                className="bg-yellow-600/80 px-4 py-5 w-32 rounded-full flex justify-center items-center"
                onClick={stopTimer}
              >
                <FontAwesomeIcon icon={faPause} className="pause-icon" />
              </button>
            ) : (
              <button
                className="bg-yellow-600/80 px-4 py-5 w-32 rounded-full flex justify-center items-center"
                onClick={runTimer}
              >
                <FontAwesomeIcon icon={faPlay} className="pause-icon" />
              </button>
            )}{" "}
          </div>
        )}
        <></>
      </div>
    </div>
  );
}

export default Timer;
