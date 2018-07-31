import React, { Component } from 'react';
import './Associate.css';
import './../../common/Colors.css';
import aero from './img/aero.jpg';
import paddy from './img/paddy.jpg';
import dondra from './img/dondra.jpg';
import beach from './img/beach.jpg';

class Associate extends Component {

    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return(
        <div className={`Associate-main-container Blink`}>
            <div className="Associate-video-container">
                <iframe frameBorder="0" title="sdf" className="Associate-video"
                src="https://www.youtube.com/embed/rxTgDK-disY?rel=0&amp;autoplay=1&loop=1&playlist=rxTgDK-disY&controls=0&showinfo=0&autohide=1&mute=1" allowFullScreen></iframe>
            </div>
            <div className="Associate-empty"/>
            <div className="Associate-paragraph">
                Nubamin is the associate of Blink. And here is the showcase of him
            </div>
            <div className="Associate-parallax" style={{backgroundImage: `url(${aero})`}}/>
            <div className="Associate-paragraph">
                That aero is wow right? Like to contact him?
            </div>
            <div className="Associate-parallax" style={{backgroundImage: `url(${paddy})`}}/>
            <div className="Associate-paragraph">
                That aero is wow right? Like to contact him?
            </div>
            <div className="Associate-parallax" style={{backgroundImage: `url(${dondra})`}}/>
            <div className="Associate-paragraph">
                Wanna see more?
            </div>
            <div className="Associate-parallax" style={{backgroundImage: `url(${beach})`}}/>
        </div>
        );
    }
}

export default Associate;