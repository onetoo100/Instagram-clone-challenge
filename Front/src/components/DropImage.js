import React, { useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";

import PublicationContext from "../contexts/publicationContext";
import AlertContext from "../contexts/alertContext";

const DropImage = () => {
  const alertContext = useContext(AlertContext);
  const publicationContext = useContext(PublicationContext);

  const { showAlert, alert } = alertContext;
  const { currentPost, updateCurrentPost } = publicationContext;

  const onDrop = useCallback(
    (acceptedFile) => {
      try {
        const post = {
          ...currentPost,
          file: Object.assign(acceptedFile[0], {
            preview: URL.createObjectURL(acceptedFile[0]),
          }),
        };

        const maxSize = 5 * 1024 * 1024,
          minSize = 50000;

        if (post.file.size <= minSize) {
          showAlert("Archivo demasiado chico");
          return;
        } else if (post.file.size >= maxSize) {
          showAlert("Archivo demasiado grande");
          return;
        }

        updateCurrentPost(post);
      } catch (error) {
        showAlert("Archivo invalido");
      }
    },
    [showAlert, currentPost, updateCurrentPost]
  );

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    noClick: true,
    accept: {
      "image/*": [],
      "video/*": [],
    },
    multiple: false,
  });

  return (
    <>
      <div {...getRootProps()} className="drag_main">
        <input {...getInputProps()} />
        <img src="./assets/post_image.svg" alt="post" />
        <span>Drag photos and videos here</span>
        <button type="button" onClick={open}>
          Select from computer
        </button>
        {alert && (
          <p style={{ color: "red", fontSize: "14px", fontWeight: "500" }}>
            {alert}
          </p>
        )}
      </div>
    </>
  );
};

export default DropImage;
