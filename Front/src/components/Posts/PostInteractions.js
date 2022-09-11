import React from "react";

const PostInteractions = ({ likes, likePost }) => {
  const likeImg = "./assets/Like.svg",
    likedImg = "./assets/Liked.svg",
    commentImg = "./assets/comments_2.svg",
    sendImg = "./assets/send.svg",
    saveImg = "./assets/save.svg";

  return (
    <div className="posts_card_list_interactions">
      <div className="posts_card_list_interactions_icons">
        <img
          src={likes === 0 ? likeImg : likedImg}
          alt="like"
          onClick={likePost}
        />
        <img src={commentImg} alt="comment" />
        <img src={sendImg} alt="send" />
      </div>
      <div className="posts_card_list_interactions_save">
        <img src={saveImg} alt="localizacion" />
      </div>
    </div>
  );
};

export default PostInteractions;
