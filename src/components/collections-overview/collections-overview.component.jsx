import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionsFroPreview } from "../../redux/shop/shop.selectors";

import "./collections-overview.style.scss";

const CollectionsOverview = ({ collections }) => (
  <div className="collcetions-overview">
    {collections.map(({ id, ...otherCollectionsProps }) => (
      <CollectionPreview key={id} {...otherCollectionsProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsFroPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
