import React from "react";
import Faq from '../Faq/Faq';
import Header from "../Header/Header";
import PriceAndPlance from "../PriceAndPlans/PriceAndPlance";
import SearchDomain from "../SearchDomain/SearchDomain";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchDomain />
      <Services/>
      <PriceAndPlance/>
      <Faq/>
    </div>
  );
};

export default Home;
