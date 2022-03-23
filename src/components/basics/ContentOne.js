import React from "react";
import "./styles.css";
const ContentOne = () => {
  return (
    <>
      <div className="content-one">
        <p className="trusted-by">Trusted by founders</p>
        <div className="img-wrap">
          <img className="img-wrap-xt" src="images/alchemy.png" alt="" />
          <img className="img-wrap-yt" src="images/lucky.png" alt="" />
          <img className="img-wrap-qt" src="images/alpine.png" alt="" />
          <img className="img-wrap-wt" src="images/habitat.png" alt="" />
          <img className="img-wrap-rt" src="images/prism.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default ContentOne;
