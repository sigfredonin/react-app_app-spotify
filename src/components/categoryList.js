import React, { Component } from 'react';
import CategoryItem from './categoryItem';

class CategoryList extends Component {

  itemsList(type, items) {
    return items.map(item => {
      const itemkey=`${type}-${item.id}`;
      return (
        <li className="list-group-item narrow-desc" key={itemkey}>
          <CategoryItem type={type} item={item} />
        </li>
      )
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

export default CategoryList;
