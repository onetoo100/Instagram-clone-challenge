import React from "react";
import VideoPlayer from "../VideoPlayer";

const PostImage = ({ picture, type }) => {
  return (
    <div className="posts_card_list_image">
      {type !== "mp4" ? (
        <img src={picture} alt="post" />
      ) : (
        <VideoPlayer props={picture} />
      )}
    </div>
  );
};

export default PostImage;
