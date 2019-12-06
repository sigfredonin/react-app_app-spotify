import React, { Component } from 'react';

class SearchButtons extends Component {
  render() {
    return (
      <div className="button-row">
        <button onClick={this.props.onNewSearch} className="btn btn-secondary">New Search</button>
        <a href={`/users/logout?id=${this.props.id}`} className="btn btn-secondary">Logout</a>
      </div>
    )
  }
}

export default SearchButtons;
