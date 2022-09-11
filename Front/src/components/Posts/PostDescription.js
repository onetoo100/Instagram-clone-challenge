import React from "react";
import { profileImg } from "../../helpers/data";

const PostDescription = ({ likes, texto }) => {
  const comment = "View all 23 comments",
    time = "2 HOURS AGO";

  return (
    <>
      <div className="posts_card_list_likes">
        <span>{likes} likes</span>
      </div>
      <div className="posts_card_list_text">
        <label>
          {profileImg.map(
            (e, index) =>
              e.image !== undefined &&
              profileImg.length === index + 1 && (
                <b key={index}>{`${e.name} `}</b>
              )
          )}
          {texto}
        </label>
        <label>{comment}</label>
      </div>
      <div className="posts_card_list_time">
        <span>
          {time} <b>See translation</b>
        </span>
      </div>
    </>
  );
};

export default PostDescription;
