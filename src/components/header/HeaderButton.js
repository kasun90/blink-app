import React, { Component } from 'react';
import './Header.css';
import './../../common/Colors.css';

class HeaderButton extends Component {
    render() {
        return (
            <div className={`Header-button Blink`}>
                <a role="button" onClick={this.props.onClick}>
                {this.props.name}
                </a>
            </div>
        );
    }
}

export default HeaderButton;