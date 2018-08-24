import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';
import './../../common/Colors.css';
import HeaderButton from './HeaderButton';
import HeaderHamButton from './HeaderHamButton';
import {withRouter, NavLink} from 'react-router-dom';

class Header extends Component {
    render() {

        const buttonData = [];

        buttonData.push({name: 'ALBUMS', path: '/albums'});
        buttonData.push({name: 'CONTACT', path: '/contact'});
        buttonData.push({name: 'ASSOCIATE', path: '/associate'});
        buttonData.push({name: 'BROWSE', dropDown: true, children: [
            {name: 'PRESETS', path: '/presets'},
            {name: 'TECH', path: '/albums'},
            {name: 'ARTICLES', path: '/articles'}
        ]});
        

        const buttons = [];

        for(var i = 0; i < buttonData.length; i++) {
            buttons.push(<HeaderButton data={buttonData[i]} key={i}/>);
        }

        return (
        <div className={`Header Blink`}>
            
            <div className="Logo-container">
                <NavLink to='/' style={{width: '100%', height: '100%'}}>
                    <img src={logo} className="Logo" alt="logo"/>
                </NavLink>
            </div>
            
            <div className="Header-button-container">
                {buttons}
                          
            </div>
            <div className="Header-mobile-button-container">
                <HeaderHamButton buttons={buttons}/>  
            </div>
        </div>
        );
    }
}

export default withRouter(Header);