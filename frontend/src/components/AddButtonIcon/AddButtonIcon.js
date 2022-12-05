import React from "react";
import "./AddButtonIcon.css";

export const AddButtonIcon = ({ text }) => {
  return (
    <div>
      <i class="fa fa-plus-circle fa-3x add-button" />
      <p class="add-button-icon-text">{text}</p>
    </div>
  );
};
