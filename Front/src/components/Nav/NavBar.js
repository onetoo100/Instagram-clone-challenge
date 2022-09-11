import React, { useContext, useEffect, useState } from "react";
import publicationContext from "../../contexts/publicationContext";

import DragDropPost from "../DragDropPost";
import CreatePost from "../Modals/CreatePost";
import ConfirmModal from "../Modals/ConfirmModal";

import NavIcons from "./NavIcons";
import NavLogo from "./NavLogo";
import NavSearch from "./NavSearch";

const NavBar = () => {
  const { currentPost, updateCurrentPost } = useContext(publicationContext);

  const [dragDropModal, setDragDropModal] = useState(false);
  const [createPostModal, setCreatePostModal] = useState(false);

  const [confirmModal, setConfirmModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const closeDrapModal = () => {
    setDragDropModal((prev) => !prev);
    updateCurrentPost({
      ...currentPost,
      file: new File([""], ""),
      texto: "",
    });
  };

  useEffect(() => {
    // Handle both modals
    if (currentPost.file.name !== "" && !currentPost.isEdit) {
      setDragDropModal(false);
      setCreatePostModal(true);
    } else {
      if (createPostModal) {
        setDragDropModal(true);
        setCreatePostModal(false);
      }
    }
  }, [currentPost.file.name]);

  const setLoading = async () => {
    // a little mess, it needs to be fixed
    setIsLoading(false);
    setConfirmModal((prev) => !prev);
    setCreatePostModal(false);

    setTimeout(() => {
      setIsLoading(true);

      setTimeout(() => {
        setConfirmModal((prev) => !prev);
      }, 2000);
    }, 2000);
  };

  return (
    <>
      <nav>
        <div className="nav_container">
          <NavLogo />
          <NavSearch />
          <NavIcons createModal={() => setDragDropModal((prev) => !prev)} />
        </div>
      </nav>
      <DragDropPost close={closeDrapModal} show={dragDropModal} />
      <CreatePost
        close={() => {
          updateCurrentPost({
            ...currentPost,
            file: new File([""], ""),
            texto: "",
          });
          setCreatePostModal(false);
        }}
        show={createPostModal}
        loading={setLoading}
      />
      <ConfirmModal loading={isLoading} show={confirmModal} />
    </>
  );
};

export default NavBar;
