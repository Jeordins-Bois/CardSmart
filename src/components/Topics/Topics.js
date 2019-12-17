//Full topics list
import React, { useState, useEffect } from "react";
import axios from "axios";
import Topic from "./Topic";

const Topics = () => {
  const [state, setState] = useState({
    topics: [
      // { name: "Medieval History", id: 1 },
      // { name: "Medieval HERstory", id: 2 },
      // { name: "WWII History (America did nothing wrong)", id: 3 }
    ]
  });

  useEffect(() => {
    axios
      .get("/api/topics")
      .then(res => setState({ ...state, topics: res.data }))
      .catch(err => "getTopics error: " + err);
  }, []);

  return (
    <>
      <div style={{ height: "15vh", backgroundColor: "#f5f5f5" }}></div>
      <section className="container">
        {state.topics.map(topic => {
          console.log(topic);
          return <Topic key={`topickey${topic.deck_name}`} topic={topic} />;
        })}
      </section>
    </>
  );
};

export default Topics;
