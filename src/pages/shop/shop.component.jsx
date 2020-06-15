import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollecetionPage from "../collection/collection.component";

import "./shop.style.scss";
class ShopPage extends React.Component {
  render() {
    const { match } = this.prop;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollecetionPage}
        />
      </div>
    );
  }
}

export default ShopPage;
