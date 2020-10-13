import React from "react";

import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Cruise-0</h1>

    <p className="lead">
      This is a POC built for Travel0 that demonstrates Auth0's IDaaS authentication flow for an SPA using <a href="https://reactjs.org">React.js</a>
    </p>
  </div>
);

export default Hero;
