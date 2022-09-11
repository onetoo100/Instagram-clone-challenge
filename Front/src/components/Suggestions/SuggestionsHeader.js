import React, { useState } from "react";
import { profileImg } from "../../helpers/data";

const SuggestionsHeader = () => {
  const [randon] = useState(
    Math.floor(Math.random() * (Math.floor(100) + Math.ceil(1)))
  );

  return (
    <div className="suggestions_header">
      <div className="suggestions_header_image">
        {profileImg.map(
          (e, index) =>
            e.image !== undefined &&
            profileImg.length === index + 1 && (
              <div key={index}>
                <img src={e.image} alt="profile" />
                <div className="suggestions_header_image_text">
                  <b>{e.name}</b>
                  <span>{`${e.name}_${randon}`}</span>
                </div>
              </div>
            )
        )}
      </div>
      <div className="suggestions_header_switch">
        <span>Switch</span>
      </div>
    </div>
  );
};

export default SuggestionsHeader;
