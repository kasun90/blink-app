import React, { Component } from 'react';
import './BlinkImage.css';

class BlinkImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageLoad : ''
        }
        this.onImageLoad = this.onImageLoad.bind(this);
    }

    onImageLoad() {
        this.setState({
            imageLoad: 'Blink-image-load'
        });
    }

    render() {
        return(<div className={`${this.props.className}`}>
            <img className={`Blink-image-image ${this.state.imageLoad}`} src={this.props.src} alt="blink-image" onLoad={this.onImageLoad}/>
        </div>);
    }
}

export default BlinkImage;