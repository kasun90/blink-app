import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';
import './../../common/Colors.css';
import HeaderButton from './HeaderButton';
import HeaderHamButton from './HeaderHamButton';
import {withRouter, NavLink} from 'react-router-dom';

class Header extends Component {
    render() {

        const buttons = [];

        var key = 0;
        buttons.push(<HeaderButton name="ALBUMS" path='/albums' key={key++}/>);
        buttons.push(<HeaderButton name="CONTACT" path='/contact' key={key++}/>);
        buttons.push(<HeaderButton name="ASSOCIATE" path='/associate' key={key++}/>);
        buttons.push(<HeaderButton name="PRESETS" path='/presets' key={key++}/>);

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