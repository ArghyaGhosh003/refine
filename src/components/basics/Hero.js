import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
const hero = () => {
  return (
    <>
      <div className="Hero">
        <div className="hero-yt">
          <div className="hero-part-h1">
            <h1 className="Recruit">Recruit </h1>
            <h1 className="engineers">engineers</h1>
            <div className="two">
              <h1 className="who">who</h1>
              <h1 className="deliver">deliver</h1>
            </div>
          </div>
          <div className="hero-part-p">
            <p className="p-one">Made by founders, for the founders.</p>
            <div className="p-two">
              <p>We know you're busy. Hire pre-vetted</p>
              <p className="ex-YC">ex-YC </p>
            </div>
            <p className="p-three">engineers in days, not weeks.</p>
            <p className="p-four">
              Spend time building instead of hiring to stay ahead of
              competitors.
            </p>
          </div>

          <NavLink activeClassName="active" to="/build">
            <button className="build-button">Let's build</button>
          </NavLink>
        </div>
        <div className="hero-ty">
          <img className="img" src="images/hero.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default hero;
