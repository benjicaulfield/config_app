import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { createNewTopic } from "../../utils/createNewTopic";
import { AddButtonIcon } from "../../components/AddButtonIcon/AddButtonIcon";
import "./CreateTopicModal.css";

export const CreateTopicModal = ({ unit_name, unit_id, topic_id }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitForm = (topic_name) => {
    // create new topic function
    createNewTopic({ unit_id, topic_id, topic_name });
  };

  return (
    <>
      <div className="nextButton" onClick={handleShow}>
        <AddButtonIcon text="Add Topic"></AddButtonIcon>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Topic</Modal.Title>
          <Modal.Dialog>{unit_name}</Modal.Dialog>
        </Modal.Header>
        <Modal.Body>Enter a new topic name:</Modal.Body>
        <form class="add-topic-form">
          <textarea
            class="form-control"
            id="createTopicFormId"
            rows="1"
            cols="1"
          ></textarea>
        </form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              submitForm(document.getElementById("createTopicFormId").value);
            }}
          >
            Save Button
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
