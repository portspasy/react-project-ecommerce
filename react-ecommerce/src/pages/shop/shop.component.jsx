import React, { Component } from "react";

import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.collection";

import "./shop.style.scss";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    // distructio
    const {collections} = this.state;
    return (
      <div className="shop-page">
        {
            collections.map(({id, ...otherCollectionsProps }) => (
                <CollectionPreview key={id} {...otherCollectionsProps} />
            ))
        }
      </div>
    );
  }
}

export default ShopPage;
