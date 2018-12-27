import React, { Component } from 'react';
import './Highlights.css';
import './../../common/Colors.css';
import fashion from './img/fashion.jpg';
import fashion2 from './img/fashion2.jpg';
import fashion3 from './img/fashion3.jpg';
import nature2 from './img/nature2.jpg';
import BlinkParallax from './../blinkParallax/BlinkParallax';
import BlinkButton from './../blinkbutton/BlinkButton';
import {withRouter} from 'react-router-dom';


// sweet grid
import samitha from './img/gridsweet/samitha.jpg';
import samith from './img/gridsweet/samith.jpg';
import chitral from './img/gridsweet/chitral.jpg';
import ranga from './img/gridsweet/ranga.jpg';

// joy grid
import thanu from './img/gridjoy/thanu.jpg';
import bash from './img/gridjoy/bash.jpg';
import malwed from './img/gridjoy/malwed.jpg';

class Highlights extends Component {

    constructor(props) {
        super(props);
        this.onContact = this.onContact.bind(this);
    }

    onContact() {
        this.props.history.push('/contact');
    }

    render() {

        const _portraitData = {title: "I love portraits!", description: "Fancy a portrait collection of you? I hope we can arrange a session."};
        const _natureData2 = {title: "I love nature!", description: "Cold weather and hiking. That is one perfect combination. Captured this at Badulla"};
        const _fashionData = {title: "I love candids!", description: "Get your event photographed. Choose the style you want. Procedure has never been more flexible. Book your session now"};

        return (
            
        <div className="Highlight-container">
            <div className="Brief-container">
                <p className="Center-text Blink"><span style={{fontStyle: 'italic'}}>“If the photographer is interested in the people in front of his lens, and if he is compassionate, it’s already a lot. The instrument is not the camera but the photographer.”</span><br/>
                    <span style={{fontWeight: 'bold'}}>— Eve Arnold</span>
                </p>
            </div>
            <BlinkParallax data={_portraitData} background={fashion3}/>
            <div className="Brief-container-items">
                <div className="Brief-text-container Blink">
                    <div className="Brief-text-title">For the sweetest moments in your life</div>
                    <div className="Seperator"></div>
                    <div className="Brief-text-description"><p>Hello, Thank you for visiting my site and for checking out my work. I'm here to convert your sweetest moments to sweetest memories. I would love to be the creator of your story. I hope I can give you something special to keep with you forever coupled with a one-of-a-kind experience. If you think I'm the right one, reach out to me.</p></div>
                    <BlinkButton onClick={this.onContact}>Contact Me</BlinkButton>
                </div>
                <div className="Brief-grid-container">
                    <div><img className="Brief-grid-item-image" src={samith} alt="blink-grid"/></div>
                    <div><img className="Brief-grid-item-image" src={samitha} alt="blink-grid"/></div>
                    <div><img className="Brief-grid-item-image" src={chitral} alt="blink-grid"/></div>
                    <div><img className="Brief-grid-item-image" src={ranga} alt="blink-grid"/></div>
                </div>
            </div>
            <BlinkParallax data={_natureData2} background={nature2}/>
            <div className="Brief-container-items">
                <div className="Brief-text-container Blink">
                    <div className="Brief-text-title">A creator of joy</div>
                    <div className="Seperator"></div>
                    <div className="Brief-text-description"><p>I would love to be a creator of joy. So I chose photography as the way to make it happen. You can consider inviting me to your parties, office's events, birthdays, engagements and etc. I provide very flexible pricing schemes that suit all your needs. Just talk to me!</p></div>
                    <BlinkButton onClick={this.onContact}>Contact Me</BlinkButton>
                </div>
                <div className="Brief-grid-container">
                    <div><img className="Brief-grid-item-image" src={thanu} alt="blink-grid"/></div>
                    <div><img className="Brief-grid-item-image" src={bash} alt="blink-grid"/></div>
                    <div><img className="Brief-grid-item-image" src={malwed} alt="blink-grid"/></div>
                    <div><img className="Brief-grid-item-image" src={fashion} alt="blink-grid"/></div>
                </div>
            </div>
            <BlinkParallax data={_fashionData} background={fashion2}/>
        </div>
        );
    }
}

export default withRouter(Highlights);