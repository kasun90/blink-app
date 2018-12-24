import React, { Component } from 'react';
import './BlinkParallax.css';

class BlinkParallax extends Component {

    constructor(props) {
        super(props);
        this.onPageScroll = this.onPageScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onPageScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onPageScroll);
    }

    onPageScroll() {
        const element  = document.getElementById('bp-main');
        const contentElemet = document.getElementById('bp-content');
        const totalScrollAmount = window.innerHeight + element.clientHeight;
        var scrollAmount = 0;

        if (document.body.scrollTop !== 0) {
            scrollAmount = document.body.scrollTop;
        } else {
            scrollAmount = document.documentElement.scrollTop;
        }

        const currentScrollOfDiv = scrollAmount + window.innerHeight - element.offsetTop;
        if (currentScrollOfDiv >= 0) {
            var scrollPercentage = (currentScrollOfDiv * 100 / totalScrollAmount).toFixed(2);
            contentElemet.style.backgroundPositionY = (100 - scrollPercentage) + '%';
            console.log('Scrolled percentage: ' + scrollPercentage);
        }
    }

    render() {
        return (
        <div id="bp-main" className="bp-main-container">
            <div id="bp-content" className="bp-content-container" style={{backgroundImage: `url(${this.props.background})`}}>
                <div className="bp-center-text bp-title">{this.props.data.title}</div>
                <div className="seperator"></div>
                <div className="bp-center-text bp-description">{this.props.data.description}</div>
            </div>
        </div>);
    }
}

export default BlinkParallax;