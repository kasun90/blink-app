import React from 'react';
import './Contact.css';
import './../../common/Colors.css';
import getTouchImage from './img/getintouch.jpg';
import BlinkTextField from './../blinktextfield/BlinkTextField';
import BlinkButton from './../blinkbutton/BlinkButton';
import WithNetwork from './../network/WithNetwork';
import BlinkModal from './../blinkModal/BlinkModal';

class GetTouch extends WithNetwork {

    constructor(props) {
        super(props);
        this.name = "";
        this.phoneNumber = "";
        this.message = "";
        this.onSend = this.onSend.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
    }

    onSend() {
        var msg = WithNetwork.buildMessage('com.blink.shared.client.messaging.UserMessage');
        msg.message = this.message;
        this.send(msg, (response, error) => {
            if (error !== undefined) {
                
            }
        });
    }

    onNameChange(event) {
        this.name = event.target.value;
    }

    onPhoneNumberChange(event) {
        this.phoneNumber = event.target.value;
    }

    onMessageChange(event) {
        this.message = event.target.value;
    }


    render() {
        return(<div className="GetTouch-container">
            <div className={`GetTouch-image-container Blink`}>
                <img src={getTouchImage} className="GetTouch-image" alt="getintouch"/>
            </div>
            <div className={`GetTouch-form-container Blink`}>
                <div className="GetTouch-header">Get In Touch</div>
                <div className="GetTouch-Seperator"/>
                <div className="GetTouch-sub-header">Email me<br/>kpiyumal90@gmail.com<br/><br/>Call me or Text me<br/>+94 71 331 7596
                <br/><br/>or<br/>Send me a message<br/></div>
                <div className="GetTouch-form-submit-container">
                    <BlinkTextField className="GetTouch-sub-header" type="text" placeholder="Name" onChange={this.onNameChange}/>
                    <BlinkTextField className="GetTouch-sub-header" type="text" placeholder="Phone Number" onChange={this.onPhoneNumberChange}/>
                    <textarea className={`GetTouch-form-text-area Blink-outline`} placeholder="Type Your Message Here" onChange={this.onMessageChange}></textarea>
                    <BlinkButton className="GetTouch-sub-header" onClick={this.onSend}>Send</BlinkButton>
                </div>
            </div>
            <BlinkModal message="Message recorded and fine" isOpen={true}/>
        </div>);
    }
}

export default GetTouch;