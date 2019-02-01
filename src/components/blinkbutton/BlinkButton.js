/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './BlinkButton.css';
import './../../common/Colors.css';

class BlinkButton extends Component {

    render() {
        const extraStyles = this.props.className !== undefined ? this.props.className : '';

        const disableClass = this.props.disabled !== undefined ? (this.props.disabled ? 'Blink-button-disabled' : '') : '';

        return(
            <a className={`${disableClass}`} role="button" onClick={this.props.onClick}>
                <div className={`Blink-button-container Blink ${extraStyles}`}>
                    <div>
                        {this.props.children}
                    </div>
                    
                </div>
            </a>
        );
    }
}

export default BlinkButton;

