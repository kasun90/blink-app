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
                <br/>A content creator, <i>a dreamer</i>
                <br/><br/>+94 77 732 4954
                <br/>nubamin@gmail.com
                </div>
            </div>
            <div className="Associate-parallax" style={{backgroundImage: `url(${aero})`}}/>
            <div className="Associate-main-video">
                <div className="Associate-main-video-container">
                    <div className="Associate-video-title">Exploring hill country</div>
                    <div className="Associate-video-container">
                        <iframe frameBorder="0" title="sdf" className="Associate-video"
                        src="https://www.youtube.com/embed/rxTgDK-disY?rel=0&amp;autoplay=0&loop=1&playlist=rxTgDK-disY&controls=1&showinfo=0&autohide=1&mute=1" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <div className="Associate-parallax" style={{backgroundImage: `url(${paddy})`}}/>
            <div className="Associate-paragraph">
                He is from my area too, Walasmulla. Yes, He has a drone. And he is good at creating
                content with it. He undertake events and projects. If you think your project can 
                benefit from drone shots and stills from a handheld at the same time, then you might
                as well reach out to him.
                <br/><br/>
                He is fun to work with. He has tons of creative ideas. Check out his facebook page,
                <a href="https://www.facebook.com/nubamin" style={{color: 'inherit'}}>Nubamin</a> for
                 more awesome stuff and to say updated.
                
            </div>
            <div className="Associate-parallax" style={{backgroundImage: `url(${dondra})`}}/>
            <div className="Associate-paragraph">
            He is working for content creating companies and freelancing most of the time. So he has 
            the experience.
            <br/>
                You want both of us to be in the same project? That can be arranged too. Also we would love 
                to hear your ideas and build a project upon them.
            </div>
            <div className="Associate-parallax" style={{backgroundImage: `url(${beach})`}}/>
        </div>
        );
    }
}

export default Associate;