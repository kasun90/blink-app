import React, { Component } from 'react';
import './Comparison.css';

class Comparison extends Component {

    constructor(props) {
        super(props);
        this.onResize = this.onResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    onResize() {
        console.log("on resize");
    }

    render() {
        return(<div className="Comparison-container">
            <div className="Comparison-image"/>
            <div className="Comparison-image"/>
        </div>);
    }
}

export default Comparison;

/* <div className="Comparison-image" style={{background: `url(${this.props.before})`}}/>
<div className="Comparison-image" style={{background: `url(${this.props.after})`}}/> */