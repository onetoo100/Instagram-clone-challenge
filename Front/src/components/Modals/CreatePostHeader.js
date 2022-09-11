import React, { useContext } from "react";

import publicationContext from "../../contexts/publicationContext";

import { AiOutlineArrowLeft } from "react-icons/ai";

const CreatePostHeader = ({ close }) => {
  const { currentPost, updateCurrentPost } = useContext(publicationContext);

  const edit = currentPost.isEdit;

  const cancelPost = () => {
    updateCurrentPost({
      ...currentPost,
      file: new File([""], ""),
      texto: "",
      isEdit: false,
    });

    if (currentPost.isEdit) close();
  };

  return (
    <div className="drag_new_header">
      {!edit ? (
        <AiOutlineArrowLeft
          className="drag_new_header_icon"
          onClick={cancelPost}
        />
      ) : (
        <span className="drag_new_header_cancel" onClick={cancelPost}>
          Cancel
        </span>
      )}

      <span>{!edit ? "Create new post" : "Edit info"}</span>
      <button type="submit">{!edit ? "Share" : "Done"}</button>
    </div>
  );
};

export default CreatePostHeader;
