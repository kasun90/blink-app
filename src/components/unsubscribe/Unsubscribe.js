import React from 'react';
import './Unsubscribe.css';
import './../../common/Colors.css';
import WithNetwork from '../network/WithNetwork';
import BlinkButton from '../blinkbutton/BlinkButton';
import * as qs from 'query-string';

class Unsubscribe extends WithNetwork {

    constructor(props) {
        super(props);
        this.state = {
            showPrompt: true,
            isSending: false,
            message: ""
        }
        this.onSend = this.onSend.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    onSend() {
        this.setState({
            isSending: true
        });

        this.generateRecaptchaCode((token) => {
            this.sendMessage(token);
        });
    }

    sendMessage(token) {
        const parsed  =  qs.parse(this.props.location.search);

        var msg = WithNetwork.buildMessage('com.blink.shared.client.subscription.UnsubscribeRequestMessage');
        msg.email = parsed.email;
        msg.recaptchaToken = token;

        this.send(msg, (response, error) => {
            this.setState({
                isSending: false
            });
            if (error !== undefined) {
                this.setState({
                    message: "Network Error"
                });
            } else {
                this.setState({
                    message: response.description
                });
                if (response.status) {
                    this.setState({
                        showPrompt: false
                    });
                }
            }
        });
    }

    render() {
        return(<div className="Unsubscribe-container Blink">
            {this.state.showPrompt && <div className="Unsubscribe-sub-container">
                <label>Do you want to unsubscribe to updates from Blink?</label>
                <BlinkButton className="Unsubscribe-button" onClick={this.onSend} disabled={this.state.isSending}>Confirm</BlinkButton>
            </div>}
            <label style={{marginTop: '1em'}}>{this.state.message}</label>
        </div>);
    }
}

export default Unsubscribe;