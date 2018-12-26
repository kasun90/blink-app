import React, { Component } from 'react';
import './BlinkParallax.css';

class BlinkParallax extends Component {

    constructor(props) {
        super(props);
        this.onPageScroll = this.onPageScroll.bind(this);
        this.mainRef = React.createRef();
        this.contentRef = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onPageScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onPageScroll);
    }

    onPageScroll() {
        const totalScrollAmount = window.innerHeight +  this.mainRef.current.clientHeight;
        var scrollAmount = 0;

        if (document.body.scrollTop !== 0) {
            scrollAmount = document.body.scrollTop;
        } else {
            scrollAmount = document.documentElement.scrollTop;
        }

        const currentScrollOfDiv = scrollAmount + window.innerHeight - this.mainRef.current.offsetTop;
        if (currentScrollOfDiv >= 0) {
            var scrollPercentage = (currentScrollOfDiv * 100 / totalScrollAmount).toFixed(2);
            this.contentRef.current.style.backgroundPositionY = (100 - scrollPercentage) + '%';
        }
    }

    render() {
        return (
        <div ref={this.mainRef} className="bp-main-container">
            <div ref={this.contentRef} className="bp-content-container" style={{backgroundImage: `url(${this.props.background})`}}>
                <div className="bp-center-text bp-title">{this.props.data.title}</div>
                <div className="seperator"></div>
                <div className="bp-center-text bp-description">{this.props.data.description}</div>
            </div>
        </div>);
    }
}

export default BlinkParallax;