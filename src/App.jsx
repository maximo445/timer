import { useState } from "react";
import Header from "./components/Header";
import Timer from "./components/Timer";

function App() {
  const [timers, setTimers] = useState([]);

  // const [time, setTime] = useState([]);

  // function addToTime(unit) {
  //   if (time.length <= 5) {
  //     setTime((time) => [...time, unit]);
  //   }
  // }

  // function deleteTime() {
  //   setTime((time) => time.slice(1));
  // }

  function addTimer(time) {
    setTimers((timers) => [time, ...timers]);
    // setTime([]);
  }

  return (
    <div>
      <Header
        // time={time}
        // setTime={setTime}
        // handleAddToTime={addToTime}
        // handleDeleteTime={deleteTime}
        handleAddTimer={addTimer}
      ></Header>
      <div>
        {timers.map((timer, index) => {
          return <Timer key={`index${index}`} time={timer} />;
        })}
      </div>
    </div>
  );
}

export default App;
