import React, { Component } from 'react';
import defaultImage from '../images/person_wispy_hair.jpg';

class ItemPicture extends Component {
  render() {
    let picture = this.props.image_url || defaultImage;
    return (
      <img alt='album or artist' className="item-picture" src={picture} height={100} />
    )
  }
}

export default ItemPicture;
