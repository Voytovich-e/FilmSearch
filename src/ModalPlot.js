import React from "react";
import { Modal } from "antd";

function ModalPlot({ visible, toggleModal, plot }) {
  return (
    <Modal
      title="Plot"
      visible={visible}
      onOk={toggleModal}
      onCancel={toggleModal}
      footer={null}
    >
      <p>{plot}</p>
    </Modal>
  );
}

export default ModalPlot;
