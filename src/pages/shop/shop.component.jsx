import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollecetionPage from "../collection/collection.component";

import {
  firestore,
  converCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { updateCollections } from "../../redux/shop/shop.actions";

import "./shop.style.scss";
class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collecetionRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collecetionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = converCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
      }
    );
  }
  render() {
    const { match } = this.props;
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

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMaps) =>
    dispatch(updateCollections(collectionsMaps)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
