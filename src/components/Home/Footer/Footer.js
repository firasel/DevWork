import { Button, Col, Row, Typography } from "antd";
import React from "react";
import "./Footer.scss";

const Footer = () => {
  const { Title } = Typography;
  return (
    <div className="footerContainer">
      <div className="container-fluid">
        <Row className="footerTitle">
          <Col span={24} md={12}>
            <Title level={5}>GET AN EASY QUOTE</Title>
            <Title level={2}>Sign Up For Web Hosting Today!</Title>
          </Col>
          <Col span={24} md={12}>
            <div className="footerTitleSecond">
              <div>
                <Title level={5}>Starting At Only</Title>
                <Title level={2}>$2.75/mo*</Title>
              </div>
              <Button className="btnDesignBlue" size="large" shape="round">
                Get Started Now
              </Button>
            </div>
          </Col>
        </Row>
        <p>Copyright © 2021 - DevWork All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
