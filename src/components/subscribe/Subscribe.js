import React from 'react';
import WithNetwork from '../network/WithNetwork';
import './Subscribe.css';
import './../../common/Colors.css';
import BlinkTextField from '../blinktextfield/BlinkTextField';
import BlinkButton from '../blinkbutton/BlinkButton';
import BlinkModal from '../blinkModal/BlinkModal';

class Subscribe extends WithNetwork {

    recaptchaToken = "";

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            showModal: false,
            modalMessage: "",
            isSending: false
        }
        this.onSend = this.onSend.bind(this);
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
    }

    componentDidMount() {
        this.generateRecaptchaCode();
    }

    onSend() {
        if (this.state.firstName === "" || this.state.lastName === "" || this.state.email === "") {
            this.setState({
                showModal: true,
                modalMessage: "Please fill all the fields"
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
    }

    onFirstNameChange(event) {
        this.setState({
            firstName: event.target.value
        });
    }

    onLastNameChange(event) {
        this.setState({
            lastName: event.target.value
        });
    }

    onEmailChange(event) {
        this.setState({
            email: event.target.value
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
        return(<div className="Subscribe-container Blink">
            <div className="Subscribe-header">
                Subcribe to Updates
            </div>
            <div className="Subscribe-sub-container">
                <div className="Subscribe-name-container">
                    <BlinkTextField className="Subscribe-textfield" type="text" placeholder="First Name" value={this.state.firstName} onChange={this.onFirstNameChange}/>
                    <BlinkTextField className="Subscribe-textfield" type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.onLastNameChange}/>
                </div>
                <BlinkTextField className="Subscribe-textfield" type="text" placeholder="Email" value={this.state.email} onChange={this.onEmailChange}/>
                <BlinkButton className="Subscribe-button" onClick={this.onSend} disabled={this.state.isSending}>Subscribe</BlinkButton>
            </div>
            <BlinkModal message={this.state.modalMessage} isOpen={this.state.showModal} onClose={this.onModalClose}/>
        </div>);
    }
}

export default Subscribe;