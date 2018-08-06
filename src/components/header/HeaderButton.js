import React, { Component } from 'react';
import './HeaderButton.css';
import './../../common/Colors.css';
import {NavLink} from 'react-router-dom';

class HeaderButton extends Component {
    render() {

        if (this.props.data.dropDown) {

            const dropButtons = [];

            for(var i = 0; i < this.props.data.children.length; i++) {
                const childData = this.props.data.children[i];
                dropButtons.push(
                    <NavLink style={{ textDecoration: 'none', color: 'inherit'}} to={childData.path}  key={i}> 
                        <div>{childData.name}</div>
                    </NavLink>
                );
            }
            
            return(
                <div className="Header-dropdown">
                    <div className="Header-button">
                        {this.props.data.name}
                    </div>
                    <div className={`Header-dropdown-content Blink-background`}>
                        {dropButtons}
                    </div>
                </div>
            );
        } else {
            return (
                <NavLink style={{ textDecoration: 'none', color: 'inherit'}} to={this.props.data.path}> 
                <div className="Header-button">
                    {this.props.data.name}
                </div>
                </NavLink>
            );
        }
    }
}

export default HeaderButton;