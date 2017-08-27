import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const TopNav = () => {
  return (
    <nav className="topNav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/tweets">Tweets</Link>
        </li>
        <li>
          <Link to="/hashtags">Hash Tags</Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
