import React, { Component } from 'react';

class Category extends Component {
  render() {
    const type = this.props.type;
    const categoryResults = this.props.items;
    return (
      <div className='container'>
        <h3>{type}: {categoryResults.length} </h3>
          <ul class="list-group list-group-flush">
            --- list of {type} ---
          </ul>
      </div>
    )
  }
}

export default Category;
