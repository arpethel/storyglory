import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import CreateStory from "../components/CreateStory";
import Stories from "../components/Stories";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route component={Stories} path="/" exact={true} />
            <Route component={CreateStory} path="/add" />
          </Switch>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
