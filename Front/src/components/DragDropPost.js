import React, { useEffect } from "react";
import DropImage from "./DropImage";
import UseModal from "../hooks/UseModal";

import { AiOutlineClose } from "react-icons/ai";

const DragDropPost = ({ close, show = true }) => {
  // useEffect(() => {
  //   const keyDownHandler = (e) => {
  //     // detect the esc or delete click for close modal
  //     const _close = e.key === "Escape" || e.key === "Delete" ? close() : null;
  //     // if (e.key === "Escape" || e.key === "Delete") {
  //     //   close();
  //     // }
  //   };

  //   document.addEventListener("keydown", keyDownHandler);

  //   return () => {
  //     document.removeEventListener("keydown", keyDownHandler);
  //   };
  //   // eslint-disable-next-line
  // }, []);

  return (
    <UseModal show={show}>
      <div className="drag" onClick={(e) => e.stopPropagation()}>
        <div className="drag_header">
          <span>Create new post</span>
        </div>
        <DropImage />
      </div>
      <AiOutlineClose className="modal_close" onClick={close} />
    </UseModal>
  );
};

export default DragDropPost;
