import React, { Component } from 'react';
import ItemPicture from './itemPicture';
import DescriptorList from './descriptorList';

class CategoryItem extends Component {
  render() {
    const type = this.props.type;
    const item = this.props.item;
    return (
      <ul className="list-group list-group-horizontal list-group-flush">
        <li className="list-group-item narrow-row" key="PICTURE">
          <ItemPicture image_url={item.image_url} />
        </li>
        <li className="list-group-item narrow-desc" key="DESCRIPTORS">
          <DescriptorList type={type} descriptors={item} />
        </li>
      </ul>
    )
  }
}

export default CategoryItem;
