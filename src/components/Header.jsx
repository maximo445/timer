import { useRef, useState } from "react";
import TimerInput from "./TimerInput";

function Header({ handleAddTimer }) {
  const [time, setTime] = useState("");

  const dialogRef = useRef();

  function openDialog() {
    if (dialogRef.current) dialogRef.current.showModal();
  }

  function closeDialog() {
    if (dialogRef.current) dialogRef.current.close();
  }

  function getTime(e) {
    e.preventDefault();
    handleAddTimer(time);
    console.log("at getTime");
    setTime("");
    closeDialog();
  }

  return (
    <div>
      <h1>Let's Create Some Timers</h1>
      <button onClick={openDialog}>New Timer</button>
      <dialog ref={dialogRef}>
        <form onSubmit={getTime}>
          <label htmlFor="time">Enter time</label>
          <input
            value={time}
            onChange={(e) => setTime(e.target.value)}
            type="text"
            id="time"
          />
          <button type="submit">Create</button>
          <button onClick={closeDialog}>Cancel</button>
        </form>
        <TimerInput />
      </dialog>
    </div>
  );
}

export default Header;
