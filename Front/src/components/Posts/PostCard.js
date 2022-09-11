import React, { useContext, useState } from "react";
import publicationContext from "../../contexts/publicationContext";
import EditPostModal from "../Modals/EditPostModal";
import CreatePost from "../Modals/CreatePost";
import PostDescription from "./PostDescription";
import PostFooter from "./PostFooter";

import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostInteractions from "./PostInteractions";

const MainCard = ({ publis }) => {
  const { updatePost, updateCurrentPost, currentPost } =
    useContext(publicationContext);
  const { imagen, texto, likes } = publis;

  const [editModal, setEditModal] = useState(false);
  const [createPostModal, setCreatePostModal] = useState(false);

  const type = imagen.split(".")[imagen.split(".").length - 1];
  const url =
    type !== "mp4" ? `/uploads/${imagen}` : `/uploads-videos/${imagen}`;
  const postImage = process.env.REACT_APP_BACKEND_URL + url;

  const editPost = async () => {
    await updateCurrentPost({
      ...publis,
      file: {
        ...currentPost.file,
        name: imagen,
        preview: postImage,
      },
      texto,
      isEdit: !currentPost.isEdit,
    });

    setEditModal((prev) => !prev);
    setCreatePostModal((prev) => !prev);
  };

  const likePost = async () => {
    await updatePost({ ...publis, likes: publis.likes === 0 ? 1 : 0 });
  };

  return (
    <>
      <div className="posts_card_list">
        <PostHeader openEditModal={() => setEditModal((prev) => !prev)} />
        <PostImage picture={postImage} type={type} />
        <PostInteractions likes={likes} likePost={likePost} />
        <PostDescription likes={likes} texto={texto} />
        <PostFooter />
      </div>
      <EditPostModal
        editPost={editPost}
        close={() => setEditModal((prev) => !prev)}
        show={editModal}
      />
      <CreatePost
        close={() => setCreatePostModal((prev) => !prev)}
        show={createPostModal}
      />
    </>
  );
};

export default MainCard;
