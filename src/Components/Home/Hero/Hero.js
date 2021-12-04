import { Button, Typography } from "antd";
import React from "react";
import "./Hero.scss";

const Hero = () => {
  const { Title } = Typography;
  return (
    <div className="heroContainer">
      <Title level={5}>
        Find your domain and hosting, buy with discount in DevWork
      </Title>
      <Title className="title">
        Domain &amp; Hosting <br /> In One Platform
      </Title>
      <div className="heroBtns">
        <Button className="btnDesignBlue" size="large" shape="round">
          Get Started
        </Button>
        <Button size="large" shape="round">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Hero;
