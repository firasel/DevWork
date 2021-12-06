import React from "react";
import Faq from '../Faq/Faq';
import Header from "../Header/Header";
import SearchDomain from "../SearchDomain/SearchDomain";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchDomain />
      <Faq/>
    </div>
  );
};

export default Home;
