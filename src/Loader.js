import React from "react";
import { Spin, Icon } from "antd";
import "./styles.css";

const antIcon = (
  <Icon className="load" type="loading" style={{ fontSize: 24 }} spin />
);

function Loader(props) {
  return <Spin indicator={antIcon} />;
}

export default Loader;
