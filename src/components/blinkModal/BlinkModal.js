import React, { Component } from 'react';
import './BlinkModal.css';
import './../../common/Colors.css';
import BlinkButton from './../blinkbutton/BlinkButton';

class BlinkModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: this.props.isOpen === undefined ? false : this.props.isOpen
        }
        this.onClose = this.onClose.bind(this);
    }

    onClose() {
        this.setState({
            isOpen: false
        });
    }

    componentWillReceiveProps(nextProps, nextState) {
        this.setState({
            isOpen: nextProps.isOpen
        });
    }

    render() {
        return(
            <div>
                {this.state.isOpen && 
                    <div className={`Blink-modal-container Blink`}>
                        <div className="Blink-modal-sub-container">
                            <div className="Blink-modal-item-container">
                                <div className="Blink-modal-text-container">{this.props.message}</div>
                                <BlinkButton onClick={this.props.onClose === undefined ? this.onClose : this.props.onClose}>Okay</BlinkButton>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default BlinkModal;