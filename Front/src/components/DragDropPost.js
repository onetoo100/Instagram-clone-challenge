import React, { useEffect } from "react";
import DropImage from "./DropImage";
import UseModal from "../hooks/UseModal";
import { blockScroll } from "../helpers/helper";

import { AiOutlineClose } from "react-icons/ai";

const DragDropPost = ({ close, show = true }) => {
  useEffect(() => {
    blockScroll(show);
  }, [show]);

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
