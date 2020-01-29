import React from "react";

import "./collection-preview.style.scss";

const CollectionPreview = ({ title, items, id }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        // filter the items by max 4 item per cathegory
        .filter((item, idx) => idx < 4)
        .map(item => (
          <div key={id}>{item.name}</div>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
