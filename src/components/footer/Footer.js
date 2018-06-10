import React, { Component } from 'react';
import './Footer.css';
import './../../common/Colors.css';
import Colors from './../../common/Colors';
import Ionicon from 'react-ionicons'


class Footer extends Component {

    constructor(props) {
        super(props);
        this.onFacebookClick = this.onFacebookClick.bind(this);
        this.onInstagramClick = this.onInstagramClick.bind(this);
        this.onYoutubeClick = this.onYoutubeClick.bind(this);
    }

    onFacebookClick() {
        window.open("https://www.facebook.com/kpiyumal", "_blank");
    }

    onInstagramClick() {
        window.open("https://www.instagram.com/kazun90/", "_blank");
    }

    onYoutubeClick() {
        window.open("https://www.youtube.com/channel/UCCEyBUbNpaHQxgcxX1dNkTQ", "_blank");
    }

    render() {
        return (
        <div className={`Footer Background`}>
            <div className="Icon-container">
                <Ionicon icon="logo-facebook" className="Icon" fontSize="35px" color={Colors.Blink} onClick={this.onFacebookClick}/>
                <Ionicon icon="logo-instagram" className="Icon" fontSize="35px" color={Colors.Blink} onClick={this.onInstagramClick}/>
                <Ionicon icon="logo-youtube" className="Icon" fontSize="35px" color={Colors.Blink} onClick={this.onYoutubeClick}/>
            </div>
            <div className={`Copyright Blink`}>
                © 2018 Blink
            </div>
        </div>
        );
    }
}

export default Footer;