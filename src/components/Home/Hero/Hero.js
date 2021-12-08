import { Button, Typography } from "antd";
import { motion } from "framer-motion";
import React from "react";
import "./Hero.scss";

const Hero = () => {
  const { Title } = Typography;
  return (
    <div className="heroContainer">
      <motion.div
        initial={{ y: "-100" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <Title level={5}>
          Find your domain and hosting, buy with discount in DevWork
        </Title>
      </motion.div>
      <motion.div
        initial={{ y: "300" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        <Title className="title">
          Domain &amp; Hosting <br /> In One Platform
        </Title>
      </motion.div>
      <motion.div
        className="heroBtns"
        initial={{ y: 150 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        <Button className="btnDesignBlue" size="large" shape="round">
          Get Started
        </Button>
        <Button size="large" shape="round">
          Get Started
        </Button>
      </motion.div>
    </div>
  );
};

export default Hero;
