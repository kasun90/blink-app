import React, { Component } from 'react';
import './Contact.css';
import './../../common/Colors.css';
import BlinkButton from './../blinkbutton/BlinkButton';
import blinkr from './img/blinkr.svg';

class MoreAbout extends Component {

    constructor(props) {
        super(props);
        this.onView = this.onView.bind(this);
    }

    onView() {
        window.open("https://github.com/kasun90/blinkr", "_blank");
    }

    render() {
        return(
            <div className={`MoreAbout-container Blink`}>
                <div>This site is an open source project.<br/>
                If you like to join as a mentor or someone who is willing to learn, you are most welcome.
                <br/><br/>
                Also I love pull requests. Check the project on GitHub. I'm open for suggestions and critics.
                <br/>
                Powered by
                </div>
                <img src={blinkr} className="blinkr-logo" alt="blinkr"/>
                <BlinkButton onClick={this.onView}>View On GitHub</BlinkButton>
            </div>
        );
    }
}

export default MoreAbout;