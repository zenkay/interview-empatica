import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import Map from './Map'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Dashboard</title>
        </Helmet>
        <h1>Dashboard</h1>
        <div style={{width: '100%', height: '600px'}}>
          <Map/>
        </div>
      </div>
    );
  }
}

export default App;

