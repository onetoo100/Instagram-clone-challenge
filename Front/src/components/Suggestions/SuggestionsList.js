import React from "react";

const SuggestionsList = ({ props }) => {
  const { image, name, followText } = props;

  return (
    <div className="suggestions_list">
      <div className="suggestions_list_image">
        <img src={image} alt="profile" />
        <div className="suggestions_list_image_text">
          <b>{name}</b>
          <span>{followText}</span>
        </div>
      </div>
      <div className="suggestions_list_switch">
        <a>Follow</a>
      </div>
    </div>
  );
};

export default SuggestionsList;
