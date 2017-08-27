import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./../Pages/Home";
import About from "./../Pages/About";
import Tweets from "./../Pages/Tweets";
import HashTags from "./../Pages/HashTags";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/tweets" component={Tweets} />
      <Route exact path="/hashtags" component={HashTags} />
    </Switch>
  );
};

export default Routes;
