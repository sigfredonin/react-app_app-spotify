import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ButtonSearch extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  };

  onClick() {
    this.props.history.push('/search');   // Go to Search Spotify page
  };

  render() {
    return (
      <div>
        <button onClick={this.onClick} className="btn btn-secondary">
          Search Spotify
        </button>
      </div>
    )
  }
}

export default withRouter(ButtonSearch);
