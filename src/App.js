import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import {Route} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="Body-container">
          <Route exact path="/" component={Home}/>
          <Route exact path="/contact" component={Contact}/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
