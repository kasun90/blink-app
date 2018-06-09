import React, { Component } from 'react';
import logo from './logo.png';
import './Header.css';
import HeaderButton from './HeaderButton.js';

class Header extends Component {

    constructor(props) {
        super(props)
        this.onAlbumsClick = this.onAlbumsClick.bind(this);
    }

    onAlbumsClick() {
        console.log("Albums clicked");
    }

    render() {
        return (
        <div className="Header">
            <div className="Logo-container">
                <img src={logo} className="Logo" alt="logo" />
            </div>
            <div className="Button-container">
                <HeaderButton name="ALBUMS" onClick={this.onAlbumsClick}/>
                <HeaderButton name="CONTACT"/>
            </div>
            
        </div>
        );
    }
}

export default Header;