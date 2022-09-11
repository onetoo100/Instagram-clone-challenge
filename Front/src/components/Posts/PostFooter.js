import React from "react";

const PostFooter = () => {
  const emojiImg = "./assets/emoji.svg",
    link = "Post";

  return (
    <div className="posts_card_list_footer">
      <div className="posts_card_list_footer_comment">
        <img src={emojiImg} alt="comment" />
        <input type="textarea" placeholder="Add a comment ..." />
      </div>
      <div className="posts_card_list_footer_post">
        <span>{link}</span>
      </div>
    </div>
  );
};

export default PostFooter;
