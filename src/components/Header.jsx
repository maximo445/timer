import { useRef, useState } from "react";
import TimerInput from "./TimerInput";

function Header({
  handleAddTimer,
  time,
  setTime,
  handleAddToTime,
  handleDeleteTime,
}) {
  // const [time, setTime] = useState("");

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
