import { useRef } from "react";

function Header() {
  const dialogRef = useRef();

  function openDialog() {
    if (dialogRef.current) dialogRef.current.showModal();
  }

  function closeDialog() {
    if (dialogRef.current) dialogRef.close();
  }

  return (
    <div>
      <h1>Let's Create Some Timers</h1>
      <button onClick={openDialog}>New Timer</button>
      <dialog ref={dialogRef}>
        <h1>Dialog is working!!!</h1>
        <button>Close</button>
      </dialog>
    </div>
  );
}

export default Header;
