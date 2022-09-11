import React, { useContext } from "react";
import { profileImg } from "../../helpers/data";

import publicationContext from "../../contexts/publicationContext";
import { AiOutlineDown } from "react-icons/ai";

const CreatePostDetails = () => {
  const { currentPost, updateCurrentPost } = useContext(publicationContext);

  const emojiIgm = "./assets/emoji-gris.svg",
    amountCharacters = "0/2,200",
    textLocation = "Add locaAtion",
    textAccessibility = "Accessibility",
    textSetting = "Advanced settings",
    locationImg = "./assets/location.svg";

  return (
    <div className="details">
      <div className="details_info">
        <div className="details_info_title">
          {profileImg.map(
            (e, index) =>
              e.image !== undefined &&
              profileImg.length === index + 1 && (
                <div key={index}>
                  <img src={e.image} alt="profile" />
                  <span>{e.name}</span>
                </div>
              )
          )}
        </div>
        <div className="details_info_text">
          <textarea
            rows="2"
            placeholder="Write a caption..."
            value={currentPost.texto}
            onChange={(e) =>
              updateCurrentPost({
                ...currentPost,
                texto: e.target.value,
              })
            }
          />
          <div className="details_info_text_icons">
            <img src={emojiIgm} alt="emoji" />
            <span>{amountCharacters}</span>
          </div>
        </div>
      </div>
      <div className="details_options">
        <div className="details_options_location">
          <span>{textLocation}</span>
          <img src={locationImg} alt="location" />
        </div>
        <div className="details_options_location--copy">
          <span>{textAccessibility}</span>
          <AiOutlineDown className="icon" />
        </div>
        <div className="details_options_location--copy--last">
          <span>{textSetting}</span>
          <AiOutlineDown className="icon" />
        </div>
      </div>
    </div>
  );
};

export default CreatePostDetails;
