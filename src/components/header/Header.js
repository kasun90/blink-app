import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';
import './../../common/Colors.css';
import HeaderButton from './HeaderButton';
import HeaderHamButton from './HeaderHamButton';
import HeaderMobileMenu from './HeaderMobileMenu';
import {withRouter} from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props)
        this.onAlbumsClick = this.onAlbumsClick.bind(this);
        this.onContactClick = this.onContactClick.bind(this);
        this.onHomeClick = this.onHomeClick.bind(this);
        this.onHamToggle = this.onHamToggle.bind(this);

        this.state = {
            toggleClass: ''
        }
    }

    onAlbumsClick() {
        this.props.history.push('/albums');
    }

    onContactClick() {
        this.props.history.push('/contact');
    }

    onHomeClick() {
        this.props.history.push('/');
    }

    onHamToggle() {
        this.setState({
            toggleClass: this.state.toggleClass === '' ? 'Header-mobile-animate' : ''
        });
    }

    render() {

        const buttons = [];

        var key = 0;
        buttons.push(<HeaderButton name="ALBUMS" onClick={this.onAlbumsClick} key={key++}/>);
        buttons.push(<HeaderButton name="CONTACT" onClick={this.onContactClick} key={key++}/>)

        return (
        <div className={`Header Blink`}>
            <div className="Logo-container">
                    <img src={logo} onClick={this.onHomeClick} className="Logo" alt="logo" />
            </div>
            <div className="Header-button-container">
                {buttons}
                          
            </div>
            <div className="Header-mobile-button-container">
                <HeaderHamButton onToggle={this.onHamToggle}/>  
            </div>
            <HeaderMobileMenu className={this.state.toggleClass} buttons={buttons}/>
        </div>
        );
    }
}

export default withRouter(Header);