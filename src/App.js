import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Favorite from './components/favorite/Favorite';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Favorite/>
      </div>
    );
  }
}

export default App;
