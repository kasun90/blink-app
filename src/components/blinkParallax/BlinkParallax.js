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
        console.log('main: ' +  document.documentElement.scrollTop + ' element: ' + element.offsetTop + ' windowHeight: ' +  window.innerHeight)
    }

    render() {
        return (
        <div id="bp-main" className="bp-main-container">
            <div className="bp-content-container" style={{backgroundImage: `url(${this.props.background})`}}>
                <div className="bp-center-text bp-title">{this.props.data.title}</div>
                <div className="seperator"></div>
                <div className="bp-center-text bp-description">{this.props.data.description}</div>
            </div>
        </div>);
    }
}

export default BlinkParallax;