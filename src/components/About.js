import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

export default function About({ refs }) {
  return (
    <div // Main section wrapper
      ref={refs["about"]}
      id="about"
      style={{
        height: "100vh",
        display: "block",
        paddingTop: "66px",
        background: "white"
      }}
    >
      <Title level={4}>ABOUT US</Title>
    </div>
  );
}
