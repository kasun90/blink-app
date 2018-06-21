import React, { Component } from 'react';
import './Header.css';
import './../../common/Colors.css';

class HeaderMobileMenu extends Component {


    render() {

        var buttons = [];
        buttons = this.props.buttons;

        const newButtons = [];

        const topDivStyle = {
            marginTop : '1em'
        };

        newButtons.push(<div style={topDivStyle} key={buttons.length * 2 + 1}/>)
        for(var i = 0; i < buttons.length * 2 ; i++) {
            if (i % 2 === 0) {
                newButtons.push(buttons[i / 2]);
            } else {
                newButtons.push(<div className="Header-mobile-menu-separator" key={buttons.length * 2 + 1 + i}/>);
            }

            newButtons.push()
        }

        const fontStyle = {
            color: 'white'
        };


        const animateClass = this.props.className !== undefined ? this.props.className : '';

        return(<div className={`${animateClass} Header-mobile-menu-container Blink-background`} style={fontStyle}>
            {newButtons}
        </div>);
    }
}

export default HeaderMobileMenu;