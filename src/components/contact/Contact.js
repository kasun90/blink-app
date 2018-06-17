import React, { Component } from 'react';
import './Contact.css';
import GetTouch from './GetTouch';
import AboutMe from './AboutMe';
import MoreAbout from './MoreAbout';

class Contact extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return(<div className="Containt-main">
        <GetTouch/>
        <AboutMe/>
        <MoreAbout/>
        </div>);
    }
}

export default Contact;