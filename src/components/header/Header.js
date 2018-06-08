import React, { Component } from 'react';
import logo from './logo.png';
import './Header.css';

class Header extends Component {
    render() {
        return (
        <div className="Header">
            <div className="Logo-container">
                <img src={logo} className="Logo" alt="logo" />
            </div>
            <button>Albums</button>
            <button>Contact</button>
        </div>
        );
    }
}

export default Header;