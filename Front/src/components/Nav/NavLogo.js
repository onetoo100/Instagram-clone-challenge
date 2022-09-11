import React from "react";
import { AiOutlineDown } from "react-icons/ai";

const NavLogo = () => {
  const logoImg = "./assets/IG-logo.png",
    Icon = AiOutlineDown;

  return (
    <div className="nav_container_logo">
      <img
        src={logoImg}
        alt="Instagram logo"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      />
      <Icon className="icon" />
    </div>
  );
};

export default NavLogo;
