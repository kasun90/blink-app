import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Albums from './components/albums/Albums';
import AlbumExpanded from './components/albums/AlbumExpanded';
import NoMatch from './NoMatch';
import {Route, Switch} from "react-router-dom";
import Associate from './components/associate/Associate';
import Presets from './components/presets/Presets';
import Articles from './components/articles/Articles';
import Tech from './components/tech/Tech';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="Body-container">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/albums" component={Albums}/>
            <Route exact path="/associate" component={Associate}/>
            <Route exact path="/presets" component={Presets}/>
            <Route path="/albums/view/:albumKey" component={AlbumExpanded}/>
            <Route exact path="/articles" component={Articles}/>
            <Route exact path="/tech" component={Tech}/>
            <Route component={NoMatch}/>
          </Switch>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
