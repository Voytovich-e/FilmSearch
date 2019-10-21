import React from "react";
import { Col } from "antd";

function Data(props) {
  return (
    <Col xs={12} md={6}>
      <div className="card">
        <img src={props.poster} alt="Avatar" />
        <div className="container">{props.title}</div>
      </div>
    </Col>
  );
}

export default Data;
