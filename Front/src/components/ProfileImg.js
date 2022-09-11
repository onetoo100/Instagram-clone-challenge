import React from "react";
import { profileImg } from "../helpers/data";

const ProfileImg = ({ styleClass }) => {
  const img = profileImg[1].image;

  return <img className={styleClass} src={img} alt="profile" />;
};

export default ProfileImg;
