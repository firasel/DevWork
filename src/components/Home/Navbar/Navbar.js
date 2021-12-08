import { Anchor, Button, Drawer, Typography } from "antd";
import { motion } from "framer-motion";
import React, { useState } from "react";
import logo from "../../../images/logo.svg";
import "./Navbar.scss";

const Navbar = () => {
  const { Title } = Typography;
  const { Link } = Anchor;
  const [visible, setVisible] = useState(false);

  return (
    <div className="navbarContainer">
      <motion.div
        className="logo"
        initial={{ x: "-100vh" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <img src={logo} alt="App Logo" />
        <Title level={2}>DevWork</Title>
      </motion.div>
      <div className="mobileHidden">
        <Anchor>
          <Link href="#hero" title="Home" />
          <Link href="#services" title="Services" />
          <Link href="#price" title="Price" />
          <Link href="#faq" title="FAQ" />
        </Anchor>
      </div>
      <motion.div
        className="mobileHidden"
        initial={{ x: "100vh" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <Button className="btnDesignBlue" size="large" shape="round">
          SignUp
        </Button>
      </motion.div>
      <div className="mobileVisible">
        <Button onClick={() => setVisible(true)}>
          <i className="fas fa-bars"></i>
        </Button>
        <Drawer
          placement="right"
          closable={true}
          onClose={() => setVisible(false)}
          visible={visible}
          onClick={() => setVisible(false)}
        >
          <Anchor>
            <Link href="#hero" title="Home" />
            <Link href="#services" title="Services" />
            <Link href="#price" title="Price" />
            <Link href="#faq" title="FAQ" />
          </Anchor>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
