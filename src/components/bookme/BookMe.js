import React, { Component } from 'react';
import './BookMe.css';
import './../../common/Colors.css';
import BlinkButton from './../blinkbutton/BlinkButton';

class BookMe extends Component {
    render() {
        return(
            <div className="BookMe-container">
                <BlinkButton>Contact Me</BlinkButton>
            </div>
        );
    }
}

export default BookMe;