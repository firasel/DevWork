import { Anchor, Button, Drawer, Typography } from "antd";
import React, { useState } from "react";
import logo from "../../../images/logo.svg";
import "./Navbar.scss";

const Navbar = () => {
  const { Title } = Typography;
  const { Link } = Anchor;
  const [visible, setVisible] = useState(false);

  return (
    <div className="navbarContainer">
      <div className="logo">
        <img src={logo} alt="App Logo" />
        <Title level={2}>DevWork</Title>
      </div>
      <div className="mobileHidden">
        <Anchor targetOffset="65">
          <Link href="#hero" title="Home +" />
          <Link href="#hosting" title="Hosting +" />
          <Link href="#pages" title="Pages +" />
          <Link href="#news" title="News" />
          <Link href="#contact" title="Contact" />
        </Anchor>
      </div>
      <div className="mobileHidden">
        <Button className="btnDesignBlue" size="large" shape="round">
          SignUp
        </Button>
      </div>
      <div className="mobileVisible">
        <Button onClick={() => setVisible(true)}>
          <i className="fas fa-bars"></i>
        </Button>
        <Drawer
          placement="right"
          closable={true}
          onClose={() => setVisible(false)}
          visible={visible}
        >
          <Anchor targetOffset="65">
            <Link href="#hero" title="Home +" />
            <Link href="#hosting" title="Hosting +" />
            <Link href="#pages" title="Pages +" />
            <Link href="#news" title="News" />
            <Link href="#contact" title="Contact" />
          </Anchor>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
