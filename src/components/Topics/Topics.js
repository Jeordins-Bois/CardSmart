//Full topics list
import React, { useState, useEffect } from "react";
import Topic from "./Topic";

const Topics = props => {
  const [state, setState] = useState({
    topics: [
      { name: "Medieval History", id: 1 },
      { name: "Medieval HERstory", id: 2 },
      { name: "WWII History (America did nothing wrong)", id: 3 }
    ]
  });
  return (
    <>
      <div style={{ height: "15vh", backgroundColor: "#f5f5f5" }}></div>
      <section className="container">
        {state.topics.map(topic => {
          return <Topic key={`topickey${topic.name}`} topic={topic} />;
        })}
      </section>
    </>
  );
};

export default Topics;
