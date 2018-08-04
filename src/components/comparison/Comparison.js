import React, { Component } from 'react';
import './Comparison.css';

class Comparison extends Component {

    x = 0;
    width = 0;
    afterImage = undefined;

    constructor(props) {
        super(props);
        this.onResize = this.onResize.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
    }

    componentDidMount() {
        this.setBackgroundImage();
        this.setBackgroundSize();
        window.addEventListener('resize', this.onResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    setBackgroundImage() {
        let afterImage = document.getElementById("comparison-after");
        afterImage.style.background = `url(${this.props.after})`;
        afterImage.style.backgroundPosition = "center right";
    }

    setBackgroundSize() {
        let container = document.getElementById("comparison-container");
        let afterImage = document.getElementById("comparison-after");

        afterImage.style.backgroundSize = `${container.clientWidth}px ${container.clientHeight}px`;
    }

    onMouseEnter() {
        let containerRect = document.getElementById("comparison-container").getBoundingClientRect();
        this.x = containerRect.x;
        this.width = containerRect.width;
        this.afterImage = document.getElementById("comparison-after");
    }

    onResize() {
        this.setBackgroundSize();
    }

    render() {
        return(<div onMouseEnter={this.onMouseEnter} onMouseMove={event => {
            const horizontal = ((event.clientX - this.x) / this.width) * 100
		    this.afterImage.style.setProperty('--x', horizontal + '%')
        }} id="comparison-container" className="Comparison-container">
            <div id="comparison-after" className="Comparison-image-after"/>
            <img className="Comparison-image-before" src={this.props.before} alt="before"/>
        </div>);
    }
}

export default Comparison;

/* <div className="Comparison-image" style={{background: `url(${this.props.before})`}}/>
<div className="Comparison-image" style={{background: `url(${this.props.after})`}}/> */