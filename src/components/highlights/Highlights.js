import React, { Component } from 'react';
import './Highlights.css';
import './../../common/Colors.css';
import nature from './img/nature.jpg';
import fashion from './img/fashion.jpg';
import nature2 from './img/nature2.jpg';
import Ionicon from 'react-ionicons';
import Colors from './../../common/Colors';

class Highlights extends Component {
    render() {
        return (
            
        <div className="Highlight-container">
            <div className={`Explore Blink`}>
                Let's explore! :)
            </div>
            <div className="Story-container">
                <div className="Image-container" id="image">
                    <img src={nature} className="Image" alt="nature" />
                </div>
                <div className="Arrow-container" id="arrow">
                    <Ionicon icon="md-arrow-dropdown-circle" fontSize="2em" color={Colors.Blink}/>
                </div>
                <div className={`Text-container Blink`} id="text">
                    <div className={`Right-text Title`}>
                        Fields of Ampara
                    </div>
                    <div className="Seperator"></div>
                    <div className={`Right-text Description`}>Found this on the way to my trip to Amapara with friends. 
                    You can see this place while you travel via the scenic Lahugala road.</div>
                </div>
                
            </div>
            <div className="Story-container">
                <div className={`Text-container Blink`} id="text">
                    <div className={`Left-text Title`}>
                        I'm in to portraits!
                    </div>
                    <div className="Seperator"></div>
                    <div className={`Left-text Description`}>Get your portraits done. Choose the style you want. Procedure has never been more flexible. Book your session now</div>
                </div>
                <div className="Arrow-container" id="arrow">
                    <Ionicon icon="md-arrow-dropdown-circle" fontSize="2em" color={Colors.Blink}/>
                </div>
                <div className="Image-container" id="image">
                    <img src={fashion} className="Image" alt="fashion" />
                </div>
            </div>
            <div className="Story-container">
                <div className="Image-container" id="image">
                    <img src={nature2} className="Image" alt="nature2" />
                </div>
                <div className="Arrow-container" id="arrow">
                    <Ionicon icon="md-arrow-dropdown-circle" fontSize="2em" color={Colors.Blink}/>
                </div>
                <div className={`Text-container Blink`} id="text">
                    <div className={`Right-text Title`}>
                        I love nature!
                    </div>
                    <div className="Seperator"></div>
                    <div className={`Right-text Description`}>Cold weather and hiking. That is one perfect combination. Captured this at Badulla</div>
                </div>
                
            </div>
        </div>
        );
    }
}

export default Highlights;