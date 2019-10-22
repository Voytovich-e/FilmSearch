import React from "react";
import { Modal } from "antd";

function Details({ visible, toggleModal, plot }) {
  return (
    <Modal
      title="Basic Modal"
      visible={visible}
      onOk={toggleModal}
      onCancel={toggleModal}
    >
      <p>{plot}</p>
    </Modal>
  );
}

export default Details;
