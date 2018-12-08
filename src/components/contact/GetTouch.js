import React from 'react';
import './Contact.css';
import './../../common/Colors.css';
import getTouchImage from './img/getintouch.jpg';
import BlinkTextField from './../blinktextfield/BlinkTextField';
import BlinkButton from './../blinkbutton/BlinkButton';
import WithNetwork from './../network/WithNetwork';
import BlinkModal from './../blinkModal/BlinkModal';
import BlinkImage from '../blinkImage/BlinkImage';

class GetTouch extends WithNetwork {

    recaptchaToken = "";

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phoneNumber: "",
            message: "",
            email: "",
            showModal: false,
            modalMessage: "",
            isSending: false
        }
        this.onSend = this.onSend.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
    }

    componentDidMount() {
        this.generateRecaptchaCode();
    }

    onSend() {
        if (this.state.message === "" || this.state.name === "" || this.state.email === ""
       || this.state.phoneNumber === "") {
            this.setState({
                modalMessage: "Please fill all the fields",
                showModal: true
            });
            return;
        }

        if (this.recaptchaToken === "") {
            this.setState({
                modalMessage: "Unknown error. Please refresh the page.",
                showModal: true
            });
            return;
        }

        var msg = WithNetwork.buildMessage('com.blink.shared.client.messaging.UserMessage');
        msg.message = this.state.message;
        msg.name = this.state.name;
        msg.email = this.state.email;
        msg.phone = this.state.phoneNumber;
        msg.recaptchaToken = this.recaptchaToken;
        this.setState({
            isSending: true
        });
        this.send(msg, (response, error) => {
            this.setState({
                showModal: true,
                isSending: false
            });
            if (error !== undefined) {
                this.setState({
                    modalMessage: "Network Error"
                });
            } else {
                this.setState({
                    modalMessage: response.description
                });
                if (response.status) {
                    this.setState({
                        name: "",
                        phoneNumber: "",
                        message: "",
                        email: ""
                    });
                }
            }
            this.generateRecaptchaCode();
        });
    }

    onNameChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    onPhoneNumberChange(event) {
        this.setState({
            phoneNumber: event.target.value
        });
    }

    onEmailChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    onMessageChange(event) {
        this.setState({
            message: event.target.value
        });
    }

    onModalClose() {
        this.setState({
            showModal: false
        });
    }

    generateRecaptchaCode() {
        if (window.grecaptcha !== undefined) {
            window.grecaptcha.ready(() => {
               window.grecaptcha.execute('6LdQV38UAAAAAPDmWPjOubE-81Ft8vqwW-nuFcEI', {action: 'user_message'})
                .then((token) => {
                    this.recaptchaToken = token;
                });
            });
        }
    }


    render() {
        return(<div className="GetTouch-container">
            <div className={`GetTouch-image-container Blink`}>
                <BlinkImage className="GetTouch-image" src={getTouchImage}/>
            </div>
            <div className={`GetTouch-form-container Blink`}>
                <div className="GetTouch-header">Get In Touch</div>
                <div className="GetTouch-Seperator"/>
                <div className="GetTouch-sub-header">Email me<br/>hello@justblink.xyz<br/><br/>Call me or Text me<br/>+94 71 331 7596
                <br/><br/>or<br/>Send me a message<br/></div>
                <div className="GetTouch-form-submit-container">
                    <BlinkTextField className="GetTouch-sub-header" type="text" placeholder="Name" value={this.state.name} onChange={this.onNameChange}/>
                    <BlinkTextField className="GetTouch-sub-header" type="text" placeholder="Phone Number" value={this.state.phoneNumber} onChange={this.onPhoneNumberChange}/>
                    <BlinkTextField className="GetTouch-sub-header" type="text" placeholder="Email" value={this.state.email} onChange={this.onEmailChange}/>
                    <textarea className={`GetTouch-form-text-area Blink-outline`} placeholder="Type Your Message Here" value={this.state.message} onChange={this.onMessageChange}></textarea>
                    <BlinkButton className="GetTouch-sub-header" onClick={this.onSend} disabled={this.state.isSending}>Send</BlinkButton>
                </div>
            </div>
            <BlinkModal message={this.state.modalMessage} isOpen={this.state.showModal} onClose={this.onModalClose}/>
        </div>);
    }
}

export default GetTouch;