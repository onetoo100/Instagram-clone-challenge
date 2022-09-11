import React, { useEffect } from "react";
import UseModal from "../../hooks/UseModal";
import UseLoading from "../../hooks/UseLoading";
import { blockScroll } from "../../helpers/helper";

const ConfirmModal = ({ loading, show = true }) => {
  useEffect(() => {
    blockScroll(show);
  }, [show]);
  return (
    <UseModal show={show}>
      <div className="drag" onClick={(e) => e.stopPropagation()}>
        <div className="drag_header">
          <span>{!loading ? "Sharing" : "Post Shared"}</span>
        </div>
        <div className="drag_main">
          {loading && <img src="./assets/Check.svg" alt="post" />}
          {!loading && <UseLoading />}
          {loading && <span>Your post has been shared</span>}
        </div>
      </div>
    </UseModal>
  );
};

export default ConfirmModal;
