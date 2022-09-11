import React from "react";
import { profileImg } from "../../helpers/data";

const PostHeader = ({ openEditModal }) => {
  return (
    <div className="posts_card_list_header">
      <div className="posts_card_list_header_title">
        {profileImg.map(
          (e, index) =>
            e.image !== undefined &&
            profileImg.length === index + 1 && (
              <div key={index}>
                <img
                  className="posts_card_list_header_title_image"
                  src={e.image}
                  alt="profile"
                />
                <span>{e.name}</span>
              </div>
            )
        )}
      </div>
      <span className="posts_card_list_header_dots" onClick={openEditModal}>
        ...
      </span>
    </div>
  );
};

export default PostHeader;
