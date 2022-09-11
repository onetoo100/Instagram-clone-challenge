import React from "react";
import ReactDOM from "react-dom";

const UseModal = ({ show, children }) => {
  // useEffect(() => {
  //   const keyDownHandler = (e) => {
  //     // detect the esc or delete click for close modal
  //     if (e.key === "Escape" || e.key === "Delete") {
  //       closeFn();
  //     }
  //   };

  //   document.addEventListener("keydown", keyDownHandler);

  //   return () => {
  //     document.removeEventListener("keydown", keyDownHandler);
  //   };
  //   // eslint-disable-next-line
  // }, []);
  return ReactDOM.createPortal(
    <>{show ? <div className="modal">{children}</div> : null}</>,
    document.getElementById("modal")
  );
};

export default UseModal;
