import React, { Component } from 'react';
import './Associate.css';
import './../../common/Colors.css';
import aero from './img/aero.jpg';
import paddy from './img/paddy.jpg';
import dondra from './img/dondra.jpg';
import beach from './img/beach.jpg';
import profile from './img/profile.jpg';

class Associate extends Component {

    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return(
        <div className={`Associate-main-container Blink`}>
            <div className="Associate-profile-container">
                <div className="Associate-profile-image-container">
                    <img src={profile} className="Associate-profile-image" alt="profile"/>
                </div>
                <div className="Associate-profile-text"><span>Nubamin</span>
                <br/>Pradeep Liyanage
                <br/>A videographer, <i>a dreamer</i>
                <br/><br/>+94 77 732 4954
                <br/>nubamin@gmail.com
                </div>
            </div>
            <div className="Associate-parallax" style={{backgroundImage: `url(${aero})`}}/>
            <div className="Associate-main-video">
                <div className="Associate-main-video-container">
                    <div style={{textAlign: 'center', fontSize: '2em', marginBottom: '1em'}}>His journey to up country</div>
                    <div className="Associate-video-container">
                        <iframe frameBorder="0" title="sdf" className="Associate-video"
                        src="https://www.youtube.com/embed/rxTgDK-disY?rel=0&amp;autoplay=0&loop=1&playlist=rxTgDK-disY&controls=1&showinfo=0&autohide=1&mute=1"></iframe>
                    </div>
                </div>
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