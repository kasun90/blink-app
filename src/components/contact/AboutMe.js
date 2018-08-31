import React, { Component } from 'react';
import './Contact.css';
import './../../common/Colors.css';
import profile from './img/profile.jpg';
import BlinkImage from '../blinkImage/BlinkImage';

class AboutMe extends Component {
    render() {
        return(<div className="AboutMe-container">
            <div className={`AboutMe-text-container Blink`}>
                <div className="AboutMe-header">Hi, I'm Kasun</div>
                <div className="AboutMe-paragraph">
                    Photography is my passionate hobby. I develop softwares for a living.<br/><br/>
                    I love portraits. I enjoy outdoors and natural light too.
                    For me, a photograph is about a fraction of time in our lives. It is a memory. 
                    My ambition is to create a memory that people can cherish for a life time.<br/><br/>
                    I'm eager to make your memories timeless, If you think i'm the right person, reach out to me.
                </div>
            </div>
            <div className={`AboutMe-image-container Blink`}>
                <BlinkImage className="AboutMe-image" src={profile}/>
            </div>
        </div>);
    }
}

export default AboutMe;