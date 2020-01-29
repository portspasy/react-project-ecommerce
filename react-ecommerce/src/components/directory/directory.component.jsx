import React, { Component } from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.style.scss";

// we need te class component here, to store the state values!!!
class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          linkUrl: 'hats',
          id: 1
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          linkUrl: 'jackets',
          id: 2
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          linkUrl: 'sneakers',
          id: 3
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          linkUrl: 'womens',
          size: "large",
          id: 4
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          linkUrl: 'mens',
          size: "large",
          id: 5
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({id, ...otherSectionsProps }) => (
          <MenuItem key={id} {...otherSectionsProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
