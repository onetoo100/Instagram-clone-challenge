import React from "react";

const VideoPlayer = ({ props }) => {
  return (
    <video className="main_card_list_image" controls>
      <source src={props} type="video/mp4"></source>
    </video>
  );
};

export default VideoPlayer;
