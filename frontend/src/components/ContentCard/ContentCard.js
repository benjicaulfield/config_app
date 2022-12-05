import React from "react";
import "./ContentCard.css";

export const ContentCard = ({
  text,
  question,
  alt_text,
  alt_question,
  keywords,
  unit_id,
  topic_id,
  paragraph_id,
}) => {
  return (
    <div class="content-card">
      <span class="content-card-question">{question}</span>
    </div>
  );
};
