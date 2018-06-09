import React, { Component } from 'react';
import './Header.css';

class HeaderButton extends Component {
    render() {
        return (
            <div className="Button">
                <a role="button" onClick={this.props.onClick}>
                {this.props.name}
                </a>
            </div>
        );
    }
}

export default HeaderButton;