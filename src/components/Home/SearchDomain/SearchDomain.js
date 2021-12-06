import { Button } from "antd";
import React from "react";
import "./SearchDomain.scss";

const SearchDomain = () => {
  return (
    <div className="searchContainer">
      <div className="container-fluid">
        <div className="searchInput">
          <input type="text" placeholder="Type Your domain..." />
          <Button className="btnDesignBlue" size="large" shape="round">
            Search
          </Button>
        </div>
        <div className="domainExt">
          <Button shape="round">.com / $7.54</Button>
          <Button shape="round">.net / $9</Button>
          <Button shape="round">.org / $15</Button>
          <Button shape="round">.me / $1.24</Button>
          <Button shape="round">.xyz / $1</Button>
        </div>
      </div>
    </div>
  );
};

export default SearchDomain;