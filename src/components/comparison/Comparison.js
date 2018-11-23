import React, { Component } from 'react';
import './Comparison.css';

class Comparison extends Component {

    x = 0;
    width = 0;

    constructor(props) {
        super(props);
        this.onResize = this.onResize.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onImageLoad = this.onImageLoad.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.containerRef = React.createRef();
        this.comparisonAfterRef = React.createRef();
        this.labelBeforeRef = React.createRef();
        this.labelAfterRef = React.createRef();
    }

    onImageLoad() {
        this.setBackgroundImage();
        this.setBackgroundSize();
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    setBackgroundImage() {
        this.comparisonAfterRef.current.style.background = `url(${this.props.after})`;
        this.comparisonAfterRef.current.style.backgroundPosition = "center right";
        this.comparisonAfterRef.current.style.setProperty('--x', '50%')
    }

    setBackgroundSize() {
        this.comparisonAfterRef.current.style.backgroundSize = `${this.containerRef.current.clientWidth}px ${this.containerRef.current.clientHeight}px`;
    }

    onMouseEnter() {
        let containerRect = this.containerRef.current.getBoundingClientRect();
        this.x = containerRect.x;
        this.width = containerRect.width;
    }

    onMouseMove(event) {
        this.onMove(event.clientX);
    }

    onTouchMove(event) {
        this.onMove(event.touches[0].clientX);
    }

    onMove(clientX) {
        const horizontal = ((clientX - this.x) / this.width) * 100
        this.comparisonAfterRef.current.style.setProperty('--x', horizontal + '%')
        
        if (horizontal < 30) {
            this.labelBeforeRef.current.style.opacity = '0';
        } else {
            this.labelBeforeRef.current.style.opacity = '1';
        }

        if (horizontal > 70) {
            this.labelAfterRef.current.style.opacity = '0';
        } else {
            this.labelAfterRef.current.style.opacity = '1';
        }
    }

    onResize() {
        this.setBackgroundSize();
    }

    render() {
        return(<div ref={this.containerRef} onMouseEnter={this.onMouseEnter} onMouseMove={this.onMouseMove} onTouchStart={this.onMouseEnter} onTouchMove={this.onTouchMove} className="Comparison-container">
            <div ref={this.comparisonAfterRef} className="Comparison-image-after"/>
            <img className="Comparison-image-before" onLoad={this.onImageLoad} src={this.props.before} alt="before"/>
            <div ref={this.labelBeforeRef} className={`Comparison-label Comparison-before`}>Before</div>
            <div ref={this.labelAfterRef} className={`Comparison-label Comparison-after`}>After</div>
        </div>);
    }
}

export default Comparison;