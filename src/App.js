import React, { useEffect } from "react";
import Home from "./Home";
import Build from "./components/basics/Build";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NProgress from "nprogress";
import { useLocation } from "react-router-dom";
import "./components/basics/nprogress.css";

const App = ({ history }) => {
  const location = useLocation();
  useEffect(() => {
    console.log("Route Change");
    NProgress.start();
    NProgress.set(2.0);
    NProgress.inc();
    NProgress.done();
  }, [location]);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Build" component={Build} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
