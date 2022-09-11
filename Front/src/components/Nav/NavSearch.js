import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const NavSearch = () => {
  return (
    <div className="nav_container_search">
      <i>
        <AiOutlineSearch className="icon" />
      </i>
      <input type="search" placeholder="Search" />
    </div>
  );
};

export default NavSearch;
