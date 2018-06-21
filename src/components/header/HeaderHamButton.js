import React, { Component } from 'react';
import './Header.css';
import './../../common/Colors.css';

class HeaderHamButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            changeClass: ''
        };

        this.toggleClass = this.toggleClass.bind(this);
    }

    toggleClass() {
        this.setState({
            changeClass: this.state.changeClass === '' ? 'Ham-change' : ''
        });
        
        if (this.props.onToggle) {
            this.props.onToggle();
        }
    }

    render() {
        return(
            <div className={`Header-ham-container ${this.state.changeClass}`} onClick={this.toggleClass}>
                <div className={`Header-ham-bar1 Blink-background`}/>
                <div className={`Header-ham-bar2 Blink-background`}/>
                <div className={`Header-ham-bar3 Blink-background`}/>
            </div>
        );
    }
}

export default HeaderHamButton;