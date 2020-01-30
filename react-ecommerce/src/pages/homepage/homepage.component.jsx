import React from "react";

import Header from "../../components/header/header.component"
import Directory from "../../components/directory/directory.component";

import "./homepage.style.scss";

const HomePage = () => (
  <div className="homepage">
      <Header />
      <Directory />
  </div>
);

export default HomePage;
