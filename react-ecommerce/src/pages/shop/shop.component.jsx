import React from "react";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

import "./shop.style.scss";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    <CollectionsOverview />
  </div>
);

export default ShopPage;
