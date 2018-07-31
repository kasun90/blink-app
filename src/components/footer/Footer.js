import React, { Component } from 'react';
import './Footer.css';
import './../../common/Colors.css';
import Colors from './../../common/Colors';
import Ionicon from 'react-ionicons';


class Footer extends Component {

    render() {
        return (
        <div className={`Footer Background`}>
            <div className="Icon-container">
                <a href="https://www.facebook.com/kpiyumal" rel="noopener noreferrer" target="_blank">
                    <Ionicon icon="logo-facebook" className="Icon" fontSize="35px" color={Colors.Blink}/>
                </a>
                <a href="https://www.instagram.com/kazun90/" rel="noopener noreferrer" target="_blank">
                    <Ionicon icon="logo-instagram" className="Icon" fontSize="35px" color={Colors.Blink}/>
                </a>
                <a href="https://www.youtube.com/channel/UCCEyBUbNpaHQxgcxX1dNkTQ" rel="noopener noreferrer" target="_blank">
                    <Ionicon icon="logo-youtube" className="Icon" fontSize="35px" color={Colors.Blink}/>
                </a>
            </div>
            <div className={`Copyright Blink`}>
                © 2018 Blink
            </div>
        </div>
        );
    }
}

export default Footer;