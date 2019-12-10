import React, { Component } from 'react';

class SearchButtons extends Component {
  render() {
    return (
      <div className="button-row">
        <a className="btn btn-secondary"
          href={`/users/logout?id=${this.props.id}`}
        >
          Logout
        </a>
      </div>
    )
  }
}

export default SearchButtons;
