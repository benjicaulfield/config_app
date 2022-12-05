import React from "react";
import "./TopicCard.css";
import { ContentCard } from "../../components/ContentCard/ContentCard";

export const TopicCard = ({
  topic_name,
  topic_id,
  content,
  unit_id,
  css_styles,
}) => {
  return (
    <div class="topic-card" style={css_styles}>
      <h3 class="topic-name">{topic_name}</h3>
      {content.map((content, key) => {
        return (
          <div key={key}>
            <ContentCard
              text={content.text}
              question={content.question}
              alt_text={content.alt_text}
              alt_question={content.alt_question}
              keywords={content.keywords}
              unit_id={unit_id}
              topic_id={topic_id}
              paragraph_id={key + 1}
            ></ContentCard>
          </div>
        );
      })}
      <div class="add-content-card">
        <span>Add Content</span>
      </div>
    </div>
  );
};
