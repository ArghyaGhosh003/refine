import React from "react";

const ContentFour = () => {
  return (
    <>
      <div className="content-four-main">
        <div className="content-four">
          <div className="content-wrap">
            <div className="content-xt">
              <div className="content-h1">
                <h1>We got your back </h1>
              </div>
              <div className="content-p">
                <p className="p-c">For the founders, by the founders.</p>
                <p>
                  We know firsthand the challenges of building a startup. We've
                  suffered through technical debt, scaling issues, server
                  crashes and hiring nightmares.
                </p>
                <p className="p-c-four">
                  We are with you every step of the way.
                </p>
              </div>
            </div>
            <div className="content-yt">
              <img
                className="content-img"
                src="images/content-four.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentFour;
