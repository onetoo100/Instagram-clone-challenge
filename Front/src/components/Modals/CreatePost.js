import React, { useContext, useEffect } from "react";

import publicationContext from "../../contexts/publicationContext";

import { AiOutlineClose } from "react-icons/ai";
import UseModal from "../../hooks/UseModal";
import CreatePostHeader from "./CreatePostHeader";
import CreatePostImage from "./CreatePostImage";
import CreatePostDetails from "./CreatePostDetails";
import { blockScroll } from "../../helpers/helper";

const CreatePost = ({ close, show = true, loading }) => {
  const { currentPost, updateCurrentPost, createPost, updatePost } =
    useContext(publicationContext);

  const post = {
    ...currentPost,
    file: new File([""], ""),
    texto: "",
    isEdit: false,
  };

  useEffect(() => {
    blockScroll(show);
  }, [show]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentPost.isEdit) {
      updateInfo();
      return;
    }

    const formData = new FormData();
    formData.append("file", currentPost.file);
    formData.append("texto", currentPost.texto);

    await loading();

    setTimeout(async () => {
      await createPost(formData);
      await updateCurrentPost(post);
    }, 2000);
  };

  const updateInfo = async () => {
    await updatePost(currentPost);
    await updateCurrentPost(post);
    close();
  };

  return (
    <UseModal show={show}>
      <form
        className="drag_new"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <CreatePostHeader close={close} />
        <div className="drag_new">
          <div className="drag_new_main">
            <CreatePostImage />
            <CreatePostDetails />
          </div>
        </div>
      </form>
      <AiOutlineClose
        className="modal_close"
        onClick={() => {
          close();
          updateCurrentPost({
            ...currentPost,
            file: new File([""], ""),
            texto: "",
            isEdit: false,
          });
        }}
      />
    </UseModal>
  );
};

export default CreatePost;
