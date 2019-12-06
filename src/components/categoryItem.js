import React, { Component } from 'react';

class CategoryItem extends Component {
  render() {
    const categoryResults = this.props.items;
    return (
      <div className='container'>
          {this.props.type} count: {categoryResults.length}
      </div>
    )
  }
}

export default CategoryItem;
