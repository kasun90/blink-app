import React, { Component } from 'react';
import './HeaderButton.css';
import './../../common/Colors.css';
import HeaderMobileMenu from './HeaderMobileMenu';

class HeaderHamButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            changeClass: '',
            menuAnimateClass: ''
        };

        this.toggleClass = this.toggleClass.bind(this);
    }

    toggleClass() {
        this.setState({
            changeClass: this.state.changeClass === '' ? 'Ham-change' : '',
            menuAnimateClass: this.state.menuAnimateClass === '' ? 'Header-mobile-animate' : ''
        });
    }

    render() {
        return(
            <div className={`Header-ham-container ${this.state.changeClass}`} onClick={this.toggleClass}>
                <div className={`Header-ham-bar1 Blink-background`}/>
                <div className={`Header-ham-bar2 Blink-background`}/>
                <div className={`Header-ham-bar3 Blink-background`}/>
                <HeaderMobileMenu className={this.state.menuAnimateClass} buttons={this.props.buttons}/>
            </div>
        );
    }
}

export default HeaderHamButton;