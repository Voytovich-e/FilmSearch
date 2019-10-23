import React, { useState } from "react";
import { Col } from "antd";
import axios from "axios";
import ModalPlot from "./ModalPlot";
import "./styles.css";
import CardMovie from "./CardMovie";

function CardMovieMeth({ imdbID }) {
  const [filmDetails, setFilmDetails] = useState({});
  const [visible, setVisible] = useState(false);
  const detailsRequest = () => {
    axios
      .get("https://www.omdbapi.com/?apikey=673b4974&", {
        params: {
          i: imdbID
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
    <CardMovie
      filmDetails={filmDetails}
      detailsRequest={detailsRequest}
      toggleModal={toggleModal}
      visible={visible}
    />
  );
}

export default CardMovieMeth;
