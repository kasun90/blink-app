import React, { Component } from 'react';
import './BookMe.css';
import './../../common/Colors.css';
import BlinkButton from './../blinkbutton/BlinkButton';
import {withRouter} from 'react-router-dom';

class BookMe extends Component {

    constructor(props) {
        super(props)
        this.onContact = this.onContact.bind(this);
    }

    onContact() {
        this.props.history.push('/contact');
    }

    render() {
        return(
            <div className="BookMe-container">
                <div className="Blink">Interested? Book a session</div>
                <BlinkButton className="BookMe-button" onClick={this.onContact}>Contact Me</BlinkButton>
            </div>
        );
    }
}

export default withRouter(BookMe);