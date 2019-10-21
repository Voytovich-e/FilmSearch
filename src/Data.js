import React from "react";
import { Col } from "antd";

function Data(props) {
  return (
    <Col xs={12} md={6}>
      <div className="card">
        <img
          src={props.poster}
          onError={e => {
            e.target.onerror = null;
            e.target.src =
              "https://i1.wp.com/newnjstatefilmfestival.com/wp-content/uploads/2017/03/camera-2.jpg";
          }}
          alt="Avatar"
        />
        <div className="container">{props.title}</div>
      </div>
    </Col>
  );
}

export default Data;
