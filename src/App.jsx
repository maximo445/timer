import { useState } from "react";
import Header from "./components/Header";
import Timer from "./components/Timer";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [timers, setTimers] = useState([]);

  function addTimer(time) {
    setTimers((timers) => [{ id: uuidv4(), time }, ...timers]);
  }

  function deleteTimer(id) {
    setTimers((timers) => timers.filter((timer) => timer.id !== id));
  }

  return (
    <div>
      <Header handleAddTimer={addTimer}></Header>
      <div>
        {timers.map((timer) => {
          return (
            <Timer
              key={timer.id}
              id={timer.id}
              time={timer.time}
              deleteTimer={deleteTimer}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
