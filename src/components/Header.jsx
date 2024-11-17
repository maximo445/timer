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
      <dialog
        className="bg-slate-800 text-slate-50 p-5 rounded-md"
        ref={dialogRef}
      >
        <form onSubmit={getTime}>
          <p>Timer</p>
          <TimerInput
            time={time}
            addToTime={handleAddToTime}
            deleteTime={handleDeleteTime}
          >
            <div className="flex w-full gap-3 mt-4">
              <button
                className="bg-slate-300 text-slate-800 w-7 h-7 m-2 rounded-full"
                type="button"
                onClick={closeDialog}
              >
                {"#"}
              </button>
              <button
                className="bg-slate-100 text-slate-800 w-11 h-11 rounded-full"
                type="submit"
              >
                {">"}
              </button>
            </div>
          </TimerInput>
        </form>
      </dialog>
    </div>
  );
}

export default Header;
