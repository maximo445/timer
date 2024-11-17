import { useEffect, useRef, useState } from "react";

const formatTime = (seconds) => {
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
};

function Timer({ time }) {
  const [totalTime, setTotalTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const timeDisplay = useRef();

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
      timeDisplay.current = formatTime(total);
    }
    calcTotalTime();
  }, [time]);

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

  const timeFormatted = formatTime(totalTime);

  return (
    <div>
      <div>
        <h1>{timeDisplay.current}</h1>
        <button>x</button>
      </div>
      <div>
        <h1>{timeFormatted}</h1>
        <button>reset</button>
      </div>
      <div>
        <span>+1:00</span>
        {isRunning ? (
          <button onClick={stopTimer}>pause</button>
        ) : (
          <button onClick={runTimer}>play</button>
        )}

        <span></span>
      </div>
    </div>
  );
}

export default Timer;
