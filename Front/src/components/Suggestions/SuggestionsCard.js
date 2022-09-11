import React from "react";
import { suggestions } from "../../helpers/data";
import SuggestionsFooter from "./SuggestionsFooter";
import SuggestionsHeader from "./SuggestionsHeader";
import SuggestionsList from "./SuggestionsList";
import SuggestionsTitle from "./SuggestionsTitle";

const SuggestionsCard = () => {
  return (
    <div className="suggestions">
      <SuggestionsHeader />
      <SuggestionsTitle />
      {suggestions.map(
        (suggestion, index) =>
          suggestion.name !== undefined && (
            <SuggestionsList key={index} props={suggestion} />
          )
      )}
      <SuggestionsFooter />
    </div>
  );
};

export default SuggestionsCard;
