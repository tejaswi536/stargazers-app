import React, { useState } from "react";
import StargazersModal from "../model/StargazersModal";

const Stargazers = () => {
  const [topic, setTopic] = useState("react");
  const topicHandler = (e) => {
    setTopic(e.target.value);
  };
  return (
    <div>
      <h1>GraphQl with React App</h1>
      <label>
        <strong>Enter Topic Name:</strong>
      </label>
      <input
        type="text"
        value={topic}
        name="topic"
        onChange={topicHandler}
      ></input>
      <StargazersModal node={topic}></StargazersModal>
    </div>
  );
};

export default Stargazers;
