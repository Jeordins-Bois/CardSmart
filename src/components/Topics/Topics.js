//Full topics list
import React, { useState, useEffect } from "react";
import Topic from "./Topic";

const Topics = (props) => {
  const [state, setState] = useState({
    topics: [
      { name: "Medieval History", id: 1 },
      { name: "Medieval HERstory", id: 2 },
      { name: "WWII History (America did nothing wrong)", id: 3 }
    ]
  });
  return (
    <section className="topics-container">
      {state.topics.map(topic => {
        return <Topic key={`topickey${topic.name}`} topic={topic} />;
      })}
    </section>
  );
};

export default Topics;
