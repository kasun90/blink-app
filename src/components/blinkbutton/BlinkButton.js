import React, { Component } from 'react';
import './BlinkButton.css';
import './../../common/Colors.css';

class BlinkButton extends Component {

    render() {
        return(
            <a role="button" onClick={this.props.onClick}>
                <div className={`Blink-button-container Blink`}>
                    <div>
                        {this.props.children}
                    </div>
                    
                </div>
            </a>
        );
    }
}

export default BlinkButton;

