import { useRef, useState } from "react";
import TimerInput from "./TimerInput";

function Header({ handleAddTimer }) {
  const [time, setTime] = useState([]);

  function handleAddToTime(unit) {
    if (time.length <= 5) {
      setTime((time) => [...time, unit]);
    }
  }

  function handleDeleteTime() {
    setTime((time) => time.slice(1));
  }

  const dialogRef = useRef();

  function openDialog() {
    if (dialogRef.current) dialogRef.current.showModal();
  }

  function closeDialog() {
    if (dialogRef.current) {
      dialogRef.current.close();
      setTime([]);
    }
  }

  function getTime(e) {
    e.preventDefault();
    handleAddTimer(time);

    closeDialog();
  }

  return (
    <div>
      <h1>Let's Create Some Timers</h1>
      <button onClick={openDialog}>New Timer</button>
      <dialog ref={dialogRef}>
        <form onSubmit={getTime}>
          <button type="submit">Create</button>
          <button type="button" onClick={closeDialog}>
            Cancel
          </button>
        </form>
        <TimerInput
          time={time}
          addToTime={handleAddToTime}
          deleteTime={handleDeleteTime}
        />
      </dialog>
    </div>
  );
}

export default Header;
