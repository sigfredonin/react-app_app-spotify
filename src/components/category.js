import React, { Component } from 'react';
import CategoryItem from './categoryItem';

class Category extends Component {

  itemsList(type, items) {
    return items.map(item => {
      return <CategoryItem type={type} item={item} key={item.id}/>;
    })
  }

  render() {
    const type = this.props.type;
    const categoryResults = this.props.items;
    return (
      <div className='container'>
        <h3>{type}: {categoryResults.length} </h3>
          <ul className="list-group list-group-flush">
            {this.itemsList(type, categoryResults)}
          </ul>
      </div>
    )
  }
}

export default Category;
