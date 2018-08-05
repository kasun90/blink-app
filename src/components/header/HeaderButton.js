import React, { Component } from 'react';
import './HeaderButton.css';
import './../../common/Colors.css';
import {NavLink} from 'react-router-dom';

class HeaderButton extends Component {
    render() {
        return (
            <NavLink style={{ textDecoration: 'none', color: 'inherit'}} to={this.props.path}> 
            <div className="Header-button">
                {this.props.name}
            </div>
            </NavLink>
        );
    }
}

export default HeaderButton;