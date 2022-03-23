import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-main">
          <div className="footer-yt">
            <img className="footer-img" src="images/footer.png" alt="" />
            <p className="footer-p">
              Copyright © 2022 Re:cruit, LLC. All rights reserved.
            </p>
          </div>
          <div className="footer-xt">
            <a href="https://twitter.com/recruitinc">Twitter</a>
            <a href="" className="founders-a">
              founders@recruit.so
            </a>
            <span className="todo">
              <a href="">Made with ♥ by</a>
              <a href="https://twitter.com/mostlydj" className="twitter-id">
                {" "}
                @mostlydj
              </a>
              <p>and</p>
              <a href="https://twitter.com/wriishaa" className="twitter-id">
                @wriishaa
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
