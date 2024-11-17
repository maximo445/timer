import { useEffect, useRef, useState } from "react";

const formatTime = (seconds) => {
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
};

function Timer({ time, id, deleteTimer }) {
  const [totalTime, setTotalTime] = useState(0);
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

  if (totalTime === 0) {
    clearInterval(playStop.current);
  }

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
  }

  function reset() {
    setTotalTime(originalTime.current);
    stopTimer();
  }

  const timeFormatted = formatTime(totalTime);
  // const timeDisplay = formatTime(originalTime.current);
  console.log(originalTime.current);

  return (
    <div>
      <div>
        <h1>{displayTime.current}</h1>
        <button onClick={() => deleteTimer(id)}>x</button>
      </div>
      <div>
        <h1>{timeFormatted}</h1>
        <button onClick={reset}>reset</button>
      </div>
      <div>
        <button onClick={add100}>+1:00</button>
        {isRunning ? (
          <button onClick={stopTimer}>pause</button>
        ) : (
          <button onClick={runTimer}>play</button>
        )}
      </div>
    </div>
  );
}

export default Timer;
