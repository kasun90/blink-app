import React, { Component } from 'react';
import './Highlights.css';
import './../../common/Colors.css';
import nature from './img/nature.jpg';
import fashion from './img/fashion.jpg';
import nature2 from './img/nature2.jpg';
import Ionicon from 'react-ionicons';
import Colors from './../../common/Colors';
import BlinkImage from '../blinkImage/BlinkImage';

class Highlights extends Component {
    render() {
        return (
            
        <div className="Highlight-container">
            <div className="Story-container">
                <div className="Content-container" style={{backgroundImage: `url(${nature})`}}>
                    <div className={`Center-text Title`}>Fields of Ampara</div>
                    <div className="Seperator"></div>
                    <div className={`Center-text Description`}>Found this on the way to my trip to Amapara with friends. 
                        You can see this place while you travel via the scenic Lahugala road.</div>
                </div>
            </div>
        </div>
        );
    }
}

export default Highlights;


/* <div className="Story-container">
                <div className={`Text-container`} style={{color: "white"}} id="text">
                    <div className={`Left-text Title`}>
                        I'm in to portraits!
                    </div>
                    <div className="Seperator"></div>
                    <div className={`Left-text Description`}>Get your portraits done. Choose the style you want. Procedure has never been more flexible. Book your session now</div>
                </div>
                <div className="Image-container" id="image">
                    <BlinkImage className="Image" src={fashion}/>
                </div>
            </div>
            <div className="Story-container">
                <div className="Image-container" id="image">
                    <BlinkImage className="Image" src={nature2}/>
                </div>
                <div className={`Text-container Blink`} id="text">
                    <div className={`Right-text Title`}>
                        I love nature!
                    </div>
                    <div className="Seperator"></div>
                    <div className={`Right-text Description`}>Cold weather and hiking. That is one perfect combination. Captured this at Badulla</div>
                </div>
                
            </div> */