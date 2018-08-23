import React, { Component } from 'react';
import './BlinkImage.css';

class BlinkImage extends Component {

    isImageMounted = true;

    constructor(props) {
        super(props);
        this.state = {
            imageLoad : ''
        }
        this.onImageLoad = this.onImageLoad.bind(this);
    }

    onImageLoad() {
        if (this.isImageMounted) {
            this.setState({
                imageLoad: 'Blink-image-load'
            });
        }
    }

    componentWillUnmount() {
        this.isImageMounted = false;
    }

    componentDidMount() {
        this.isImageMounted = true;
    }

    render() {
        return(<div className={`${this.props.className}`}>
            <img className={`Blink-image-image ${this.state.imageLoad}`} src={this.props.src} alt="blink-image" onLoad={this.onImageLoad}/>
        </div>);
    }
}

export default BlinkImage;