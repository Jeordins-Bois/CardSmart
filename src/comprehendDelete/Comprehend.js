import React, { useEffect, useState } from "react";
const text = require("./info");

function Comprehend() {
  const config = require("../Config");

  const [keyPhrases, setKeyPhrases] = useState({});
  const [entities, setEntities] = useState({});
  const [sentiment, setSentiment] = useState({});

  var AWS = require("aws-sdk/dist/aws-sdk-react-native");

  AWS.config.update({
    region: "us-west-2",
    accessKeyId: config.AWS_ACCESS_KEY_ID,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY
  });

  var comprehend = new AWS.Comprehend({ apiVersion: "2017-11-27" });

  var detectEntitiesParams = {
    LanguageCode: "en",
    Text: text
  };

  useEffect(() => {
    comprehend.detectEntities(detectEntitiesParams, function(err, data) {
      if (err) console.log("err, err.stack");
      else setEntities(data);
    });

    // This function sends the article's content to Amazon comprehend and attaches the sentiment to the article object.
    var detectSentimentParams = {
      LanguageCode: "en",
      Text: text
    };

    comprehend.detectSentiment(detectSentimentParams, function(err, data) {
      if (err) console.log("err, err.stack");
      else setSentiment(data);
    });

    // This function sends the article's content to Amazon comprehend and attaches the key phrases to the article object.
    var detectKeyPhrasesParams = {
      LanguageCode: "en",
      Text: text
    };

    comprehend.detectKeyPhrases(detectKeyPhrasesParams, function(err, data) {
      if (err) console.log("err, err.stack");
      else setKeyPhrases(data);
    });
  }, []);

  console.log("%ckey phrases", "color:red;", keyPhrases);
  console.log("%centities", "color:blue;" , entities);
  console.log("%csentiment", "color:purple;" , sentiment);

  return <div className="App">This is working Comprehend!</div>;
}

export default Comprehend;
