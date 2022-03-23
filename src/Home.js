// import Header from "./components/basics/header";

import React from "react";
import Hero from "./components/basics/Hero";
import Slider from "./components/basics/Slider";
import ContentOne from "./components/basics/ContentOne";
import ContentTwo from "./components/basics/ContentTwo";
import ContentThree from "./components/basics/ContentThree";
import ContentFour from "./components/basics/ContentFour";
import ContentFive from "./components/basics/ContentFive";
import Footer from "./components/basics/Footer";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <ContentOne />
      <Slider />
      <ContentTwo />
      <ContentThree />
      <ContentFour />
      <ContentFive />
      <Footer />
    </>
  );
};

export default Home;
