import { useRef, useState } from "react";
import TimerInput from "./TimerInput";

function Header({ handleAddTimer, timers }) {
  const [time, setTime] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
    if (dialogRef.current) {
      dialogRef.current.showModal();
      setIsDialogOpen(true);
    }
  }

  function closeDialog() {
    if (dialogRef.current) {
      dialogRef.current.close();
      setIsDialogOpen(false);
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
      <div className="flex flex-col w-full justify-center items-center h-40 p-8 text-center">
        <h1 className="font-mono text-4xl drop-shadow-lg">
          THE <span className="text-cyan-500">TIMER</span> COUNTDOWN APP
        </h1>
        {timers.length <= 4 && (
          <button
            className="bg-cyan-700 px-5 py-2 rounded mt-4"
            onClick={openDialog}
          >
            <h1 className="text-xl drop-shadow-lg">New Timer</h1>
          </button>
        )}
      </div>
      {isDialogOpen && (
        <div
          className="fixed inset-0 bg-black opacity-80 z-10"
          onClick={closeDialog} // Close dialog when clicking on the backdrop
        ></div>
      )}
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
