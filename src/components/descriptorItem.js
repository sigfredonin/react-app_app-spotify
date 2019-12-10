import { Component } from 'react';

class DescriptorItem extends Component {

  descriptorsListItem(type, item, descriptor) {
    const labels = {
      name: 'Name', artists: 'Artists', tracks: 'Number of Tracks',
      release_date: 'Release Date', id: 'Spotify ID'
    };
    const label = labels[item];
    if (label !== undefined) {
      if (item === 'artists') {
        return (
          `${label}: ${descriptor.join(", ")}`
        )
      } else {
        return (
          `${label}: ${descriptor}`
        )
      }
    }
    return null;
  }

  render() {
    const type = this.props.type;               // albums, artists, tracks, or playlists
    const item = this.props.item                // key of item for an entry of the result type
    const descriptor = this.props.descriptor;   // value of item for an entry of the result type
    return (
      this.descriptorsListItem(type, item, descriptor)
    );
  }
}

export default DescriptorItem;
