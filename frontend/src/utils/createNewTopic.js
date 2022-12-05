import React from "react";
// import { fs } from "fs";

export const createNewTopic = ({ unit_id, topic_id, topic_name }) => {
  let data = require("../data/data.json");
  const unitIndex = unit_id - 1;
  const topicIndex = topic_id - 1;

  console.log(topic_name);
  console.log(data);

  data[unitIndex].unit_content[topicIndex] = {
    topic_name: topic_name,
    content: [],
  };

  var json = JSON.stringify(data);

  // var fs = require("fs");
  // fs.writeFile("../data/data2.json", json, function (err, result) {
  //   if (err) console.log("error", err);
  // });
};
