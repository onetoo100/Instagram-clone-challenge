import React, { useContext } from "react";

import publicationContext from "../../contexts/publicationContext";

import VideoPlayer from "../VideoPlayer";

const CreatePostImage = () => {
  const { currentPost } = useContext(publicationContext);

  const type =
    currentPost.file.name.split(".")[
      currentPost.file.name.split(".").length - 1
    ];

  const thumbs =
    currentPost.file.preview &&
    (!type.includes("mp4") ? (
      <img
        src={currentPost.file.preview}
        onLoad={() => {
          URL.revokeObjectURL(currentPost.file.preview);
        }}
      />
    ) : (
      <VideoPlayer props={currentPost.file.preview} />
    ));

  return <div className="picture">{thumbs}</div>;
};

export default CreatePostImage;
