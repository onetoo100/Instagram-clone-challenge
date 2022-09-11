import React from "react";

const SuggestionsTitle = () => {
  const text = "Suggestions For You",
    link = "See All";

  return (
    <div className="suggestions_title">
      <span>{text}</span>
      <span>{link}</span>
    </div>
  );
};

export default SuggestionsTitle;
