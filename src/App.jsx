import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [timers, setTimers] = useState([]);

  function addTimer(time) {
    setTimers((timers) => [time, ...timers]);
  }

  console.log(timers);

  return (
    <div>
      <Header handleAddTimer={addTimer}></Header>
    </div>
  );
}

export default App;
