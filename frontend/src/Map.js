import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

export default class Map extends Component {
  static defaultProps = {
    center: {lat: 41.8, lng: 12.5},
    zoom: 7
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      />
    );
  }
}
