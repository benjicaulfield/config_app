import React from "react";
import "./UnitCard.css";
import { TopicCard } from "../../components/TopicCard/TopicCard";
import { AddButtonIcon } from "../AddButtonIcon/AddButtonIcon";
import { CreateTopicModal } from "../../modals/CreateTopicModal/CreateTopicModal";

export const UnitCard = ({ unit_name, unit_id, topics }) => {
  let colors = [
    ["rgba(255, 136, 198, 1.0)", "rgba(255, 136, 198, 0.1)"],
    ["rgba(255, 194, 101, 0.8)", "rgba(255, 194, 101, 0.3)"],
    ["rgba(153, 255, 155, 0.8)", "rgba(153, 255, 155, 0.3)"],
    ["rgba(255, 244, 153, 1.0)", "rgba(255, 244, 153, 0.3)"],
    ["rgba(233, 203, 255, 1.0)", "rgba(233, 203, 255, 0.3)"],
    ["rgba(203, 254, 255, 1.0)", "rgba(203, 254, 255, 0.3)"],
  ];

  return (
    <div className="unit-card ">
      <h2 className="unit-name">{unit_name}</h2>

      <div className="d-flex align-items-start flex-wrap">
        {topics.map((topic, key) => {
          let color = colors[key % colors.length];

          const divStyle = {
            background: color[1],
            borderColor: color[0],
          };

          return (
            <div key={key} class="mb-auto p-3">
              <TopicCard
                css_styles={divStyle}
                topic_name={topic.topic_name}
                topic_id={key + 1}
                content={topic.contents}
                unit_id={unit_id}
              ></TopicCard>
            </div>
          );
        })}

        <CreateTopicModal
          unit_name={unit_name}
          unit_id={unit_id}
          topic_id={topics.length + 1}
        ></CreateTopicModal>
      </div>
    </div>
  );
};
