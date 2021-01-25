import React from "react";
import "./RelatedStargazers.css";

const RelatedStargazers = (data) => {
  return (
    <div>
      {data.data.length > 0 ? (
        data.data.map((relatedTopic) => {
          return (
            <div className="stargazers-list">
              <div>
                <strong>Topic: </strong>
                {relatedTopic.name}
              </div>
              <div>
                <strong>Startgazers: </strong>
                {relatedTopic.stargazerCount}
              </div>
            </div>
          );
        })
      ) : (
        <p>No stargaers are found!!!</p>
      )}
    </div>
  );
};

export default RelatedStargazers;
