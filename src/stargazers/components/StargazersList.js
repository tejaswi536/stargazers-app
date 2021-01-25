import React, { useState, useRef } from "react";
import "./StargazersList.css";
import RelatedStargazers from "./RelatedStargazers";

const StargazersList = (stargazer, index) => {
  const [active, setActive] = useState("");
  const [display, setDisplay] = useState("none");
  const content = useRef(null);

  const toggleAccordian = () => {
    setActive(active === "" ? "active" : "");
    setDisplay(active === "" ? "block" : "none");
  };
  return (
    <div>
      <div key={index} className="stargazers__section">
        <button className={`accordian ${active}`} onClick={toggleAccordian}>
          <p className="stargazers__title">
            <strong> Title:</strong> {stargazer.stargazer.topic.name} -------
          </p>
          <p className="stargazers__title">
            ---- <strong>Stargazers:</strong>{" "}
            {stargazer.stargazer.topic.stargazerCount}
          </p>
        </button>
        <div
          ref={content}
          style={{ display: `${display}` }}
          className="stargazers__content"
        >
          <RelatedStargazers
            data={stargazer.stargazer.topic.relatedTopics}
          ></RelatedStargazers>
        </div>
      </div>
    </div>
  );
};

export default StargazersList;
