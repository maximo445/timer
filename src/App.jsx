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
      <Header handleAddTimer={addTimer} timers={timers}></Header>
      {timers.length >= 1 && (
        <div className="w-full flex justify-center items-start">
          <div className="bg-gradient-to-b from-black/90 via-gray-800/95 to-gray-900 h-5/6 w-5/6 flex justify-center items-center flex-wrap gap-6 p-8 rounded-2xl">
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
      )}
    </div>
  );
}

export default App;
