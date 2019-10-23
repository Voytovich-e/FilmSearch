import React from "react";
import { Col } from "antd";

import ModalPlot from "./ModalPlot";
import "./styles.css";

function CardMovie({
  poster,
  title,
  detailsRequest,
  filmDetails,
  toggleModal,
  visible,
  imdbID
}) {
  return (
    <Col xs={12} md={6}>
      <div className="card">
        <img
          onClick={detailsRequest}
          src={poster}
          onError={e => {
            e.target.onerror = null;
            e.target.src =
              "https://i1.wp.com/newnjstatefilmfestival.com/wp-content/uploads/2017/03/camera-2.jpg";
          }}
          alt="Avatar"
        />

        <div className="container">{title}</div>
        <div>
          <ModalPlot
            plot={filmDetails && filmDetails.Plot}
            toggleModal={toggleModal}
            visible={visible}
            imdbID={imdbID}
          />
        </div>
      </div>
    </Col>
  );
}

export default CardMovie;
