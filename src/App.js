import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Favorite from './components/favorite/Favorite';
import Highlights from './components/highlights/Highlights';
import Footer from './components/footer/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="Body-container">
          <Favorite/>
          <Highlights/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
