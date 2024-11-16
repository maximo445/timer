import { useState } from "react";

function Timer({ time }) {
  const [seconds, setSeconds] = useState(() => {
    switch (time.length) {
      case 0:
        return 0;
      case 1:
        return time[0];
      case 2:
        return +`${time[0]}${time[1]}`;
      case 3:
        return +`${time[1]}${time[2]}`;
      case 4:
        return +`${time[2]}${time[3]}`;
      case 5:
        return +`${time[3]}${time[4]}`;
      case 6:
        return +`${time[4]}${time[5]}`;
      default:
        return 0;
    }
  });
  const [minutes, setMinutes] = useState();
  const [hours, setHours] = useState();
  const zeros = Array(6 - time.length).fill(0);
  const fullTime = zeros.concat(time);

  console.log({ timeFromTime: time });

  return (
    <div>
      <div>
        <h1>{`${fullTime[0]}${fullTime[1]}h ${fullTime[2]}${fullTime[3]}m ${fullTime[4]}${fullTime[5]}s`}</h1>
        <button>x</button>
      </div>
      <div>
        <h1>{`12:10:${seconds}`}</h1>
        <button>reset</button>
      </div>
      <div>
        <span>+1:00</span>
        <span>
          <button>play</button>
        </span>
      </div>
    </div>
  );
}

export default Timer;
