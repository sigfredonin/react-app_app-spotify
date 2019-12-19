import React, { Component } from 'react';

class ButtonNewSearch extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onNewSearch} className="btn btn-secondary">
          New Search
        </button>
      </div>
    )
  }
}

export default ButtonNewSearch;
