import React, { useEffect } from "react";
import UseModal from "../../hooks/UseModal";
import { blockScroll } from "../../helpers/helper";

import { AiOutlineClose } from "react-icons/ai";

const EditPostModal = ({ editPost, close, show = true }) => {
  const data = [
    "Delete",
    "Edit",
    "Hide like count",
    "Turn off commenting",
    "Go to post",
    "Share to...",
    "Copy link",
    "Embed",
    "Cancel",
  ];

  useEffect(() => {
    blockScroll(show);
  }, [show]);

  return (
    <UseModal show={show}>
      <div className="drag_edit" onClick={(e) => e.stopPropagation()}>
        {data.map((value, index) => (
          <div key={index} className="drag_edit_card">
            {value === "Edit" ? (
              <span
                style={{ fontWeight: "500", cursor: "pointer" }}
                onClick={editPost}
              >
                {value}
              </span>
            ) : (
              <span style={{ opacity: "0.6" }}>{value}</span>
            )}
          </div>
        ))}
      </div>
      <AiOutlineClose className="modal_close" onClick={close} />
    </UseModal>
  );
};

export default EditPostModal;
