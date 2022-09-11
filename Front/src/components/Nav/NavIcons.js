import React from "react";
import { profileImg } from "../../helpers/data";

const NavIcons = ({ createModal }) => {
  const homeImg = "./assets/Home.svg",
    chatImg = "./assets/Chat.svg",
    addImg = "./assets/Agregar.svg",
    localizationImg = "./assets/localizacion.svg",
    likeImg = "./assets/Like.svg";

  return (
    <div className="nav_container_icons">
      <img
        className="icon"
        src={homeImg}
        alt="home icon"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      />
      <img className="icon" src={chatImg} alt="chat icon" />
      <img className="icon" src={addImg} alt="Add icon" onClick={createModal} />
      <img className="icon" src={localizationImg} alt="Localizacion icon" />
      <img className="icon" src={likeImg} alt="like icon" />
      {profileImg.map(
        (e, index) =>
          e.image !== undefined &&
          profileImg.length === index + 1 && (
            <img
              key={index}
              className="profile_icon"
              src={e.image}
              alt="profile"
            />
          )
      )}
    </div>
  );
};
export default NavIcons;
