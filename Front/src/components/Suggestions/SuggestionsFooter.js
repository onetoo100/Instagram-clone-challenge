import React from "react";

const SuggestionsFooter = () => {
  const footer = [
    "About . ",
    "Help .",
    "Press ·",
    "API ·",
    "Jobs ·",
    "Privacy ·",
    "Terms ·",
    "Location ·",
    "Lenguage ·",
  ];
  return (
    <div className="suggestions_footer">
      <div className="suggestions_footer_terms">
        {footer.map((e, index) => (
          <span key={index}>{e}</span>
        ))}
      </div>
      <div className="suggestions_footer_meta">
        <span>© 2022 INSTAGRAM FROM META</span>
      </div>
    </div>
  );
};

export default SuggestionsFooter;
