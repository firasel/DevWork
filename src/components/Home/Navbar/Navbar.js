import { Typography } from "antd";
import React from "react";
import './Navbar.scss';

const Navbar = () => {
  const { Title } = Typography;
  return (
    <div className="navbarContainer">
      <Title className="navbarTitle" level={5}>This is navbar</Title>
    </div>
  );
};

export default Navbar;
