import React from "react";

import "./menu-item.style.scss";

const MenuItem = ({ title, imageUrl, size }) => (
  // the way we can add backgourd images in react!
  <div
    style={{
      backgroundImage: `url(${imageUrl})`
    }}
    className={`${size} menu-item`}
  >
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
