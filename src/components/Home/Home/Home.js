import React from "react";
import Faq from "../Faq/Faq";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchDomain from "../SearchDomain/SearchDomain";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchDomain />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
