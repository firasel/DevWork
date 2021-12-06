import { Col, Collapse, Row, Typography } from "antd";
import React from "react";
import FaqImg from "../../../images/faqImg.png";
import "./Faq.scss";

const Faq = () => {
  const { Title } = Typography;
  const { Panel } = Collapse;
  return (
    <div className="faqContainer">
      <Row className="container-fluid">
        <Col md={12}>
          <img src={FaqImg} alt="Faq design" />
        </Col>
        <Col className="contentCol" md={{ span: 11, offset: 1 }}>
          <div>
            <Title level={5}>FAQ</Title>
            <Title level={1}>Get Every Single Answer From Here.</Title>
            <Title level={4}>
              We're here to help. Get in touch and we'll get back to you as soon
              as we can.
            </Title>
            <div className="faqAccordion">
              <Collapse defaultActiveKey={["3"]} accordion>
                <Panel
                  header="How do I give my computer a static local IP address?"
                  key="1"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                </Panel>
                <Panel
                  header="Why can't people connect to the web server on my PC?"
                  key="2"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                </Panel>
                <Panel
                  header="What domain name should I choose for my site?"
                  key="3"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis with nostrud
                    exercitation ullamco laboris nisi ut aliquip.
                  </p>
                </Panel>
              </Collapse>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Faq;
