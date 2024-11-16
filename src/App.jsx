import { useState } from "react";
import Header from "./components/Header";
import Timer from "./components/Timer";

function App() {
  const [timers, setTimers] = useState([]);

  const [time, setTime] = useState([]);

  function addToTime(unit) {
    if (time.length <= 5) {
      setTime((time) => [...time, unit]);
    }
  }

  function deleteTime() {
    setTime((time) => time.slice(1));
  }

  function addTimer(time) {
    setTimers((timers) => [time, ...timers]);
    setTime([]);
  }

  console.log({ timers });

  return (
    <div>
      <Header
        handleAddTimer={addTimer}
        time={time}
        setTime={setTime}
        handleAddToTime={addToTime}
        handleDeleteTime={deleteTime}
      ></Header>
      <div>
        {timers.map((timer, index) => (
          <Timer key={index} time={timer} />
        ))}
      </div>
    </div>
  );
}

export default App;
