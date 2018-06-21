import React, { Component } from 'react';
import './Contact.css';
import './../../common/Colors.css';
import profile from './img/profile.jpg';

class AboutMe extends Component {
    render() {
        return(<div className="AboutMe-container">
            <div className={`AboutMe-text-container Blink`}>
                <div className="AboutMe-header">Hi, I'm Kasun</div>
                <div className="AboutMe-paragraph">
                    I love portraits. And I also love outdoors and natural light.<br/>
                    A photograph is about a fraction of time of our lives. It is a memory. My goal is to
                    create a memory that people who appear there can cherish for a life time. It may be now or it can be years 
                    from now. <br/><br/>
                    I develop softwares for a living. Photography is my hobby. If you think I can make your memories more special, you know what to do.
                    Just contact me.
                </div>
            </div>
            <div className={`AboutMe-image-container Blink`}>
                <img className="AboutMe-image" src={profile} alt='profile'/>
            </div>
        </div>);
    }
}

export default AboutMe;