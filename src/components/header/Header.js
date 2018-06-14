import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';
import './../../common/Colors.css';
import HeaderButton from './HeaderButton.js';
import {withRouter} from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props)
        this.onAlbumsClick = this.onAlbumsClick.bind(this);
        this.onContactClick = this.onContactClick.bind(this);
        this.onHomeClick = this.onHomeClick.bind(this);
    }

    onAlbumsClick() {
        console.log("Albums clicked");
    }

    onContactClick() {
        this.props.history.push('/contact');
    }

    onHomeClick() {
        this.props.history.push('/');
    }

    render() {
        return (
        <div className={`Header`}>
            <div className="Logo-container">
                    <img src={logo} onClick={this.onHomeClick} className="Logo" alt="logo" />
            </div>
            <div className="Header-button-container">
                <HeaderButton name="ALBUMS" onClick={this.onAlbumsClick}/>
                <HeaderButton name="CONTACT" onClick={this.onContactClick}/>
            </div>
            
        </div>
        );
    }
}

export default withRouter(Header);