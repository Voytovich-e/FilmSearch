import React, { useState } from "react";
import { Col } from "antd";
import axios from "axios";
import Details from "./Details";

function Data(props) {
  const [filmDetails, setFilmDetails] = useState({});
  const [visible, setVisible] = useState(false);
  const detailsRequest = () => {
    axios
      .get("https://www.omdbapi.com/?apikey=673b4974&", {
        params: {
          i: props.imdbID
        }
      })
      .then(response => {
        console.log(response.data);
        setFilmDetails(response.data);
        setVisible(true);
      });
  };

  const toggleModal = () => {
    setVisible(!visible);
  };

  return (
    <Col xs={12} md={6}>
      <div className="card">
        <img
          onClick={detailsRequest}
          src={props.poster}
          onError={e => {
            e.target.onerror = null;
            e.target.src =
              "https://i1.wp.com/newnjstatefilmfestival.com/wp-content/uploads/2017/03/camera-2.jpg";
          }}
          alt="Avatar"
        />

        <div className="container">{props.title}</div>
        <div>
          <Details
            plot={filmDetails.Plot}
            toggleModal={toggleModal}
            visible={visible}
          />
        </div>
      </div>
    </Col>
  );
}

export default Data;
