import React from "react";

const header = () => {
  return (
    <>
      <div className="header">
        <div className="header-main">
          <div className="header-xt">
            <img className="header-img" src="images/header.png" alt="" />
            <h2 className="header-h2">re:cruit</h2>
          </div>
          <button type="button" className="nav-toggler">
            <span></span>
          </button>
          <nav class="nav">
            <ul>
              <div className="header-yt">
                <a href="">Services</a>
                <a className="contact" href="">
                  Contact
                </a>
                <a href="">About us</a>
              </div>
              <div className="header-zt">
                <a href="">Let's build</a>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default header;
