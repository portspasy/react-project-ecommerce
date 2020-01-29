import React from "react";

import "./collection-preview.style.scss";

const CollectionPreview = ({ title, items, id }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items.map(item => (
        <div key={id}>{item.name}</div>
      ))}
    </div>
  </div>
);

export default CollectionPreview;
