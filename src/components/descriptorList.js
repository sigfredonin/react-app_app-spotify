import React, { Component } from 'react';
import DescriptorItem from './descriptorItem';

class DescriptorList extends Component {

  descriptorsList(type, descriptors) {
    return Object.keys(descriptors).map(item => {
      const descriptor = descriptors[item];
      return (
        <li className="list-group-item narrow-row result-item-desc" key={item} >
          <DescriptorItem type={type} item={item} descriptor={descriptor} />
        </li>
      )
    })
  }

  render() {
    const type = this.props.type;
    const descriptors = this.props.descriptors;
    console.log('descriptors: %O', descriptors);
    return (
      <ul className="list-group">
        {this.descriptorsList(type, descriptors)}
      </ul>
    )
  }
}

export default DescriptorList;
