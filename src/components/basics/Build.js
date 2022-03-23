import React from "react";
import ContentFive from "./ContentFive";
import Slider from "./Slider";
import Footer from "./Footer";
import Header from "./header";
import NProgress from "nprogress";
import "./nprogress.css";

const build = () => {
  NProgress.start();
  NProgress.set(2.0);
  NProgress.inc(2.0);
  NProgress.done(2.0);
  return (
    <>
      <Header />
      <ContentFive />
      <Slider />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default build;
