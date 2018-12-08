import React, { Component } from 'react';
import './BlinkImage.css';
import './../../common/Colors.css';

class BlinkImage extends Component {

    isImageMounted = true;
    placeholderEnabled= false;

    constructor(props) {
        super(props);
        this.placeholderEnabled = this.props.placeholderEnabled !== undefined && this.props.placeholderEnabled;
        this.state = {
            imageLoad : '',
            placeHolderClass: (this.placeholderEnabled) ? 'Background-x Blink-image-placeholder' : ''
        }
        this.onImageLoad = this.onImageLoad.bind(this);
    }

    onImageLoad() {
        if (this.isImageMounted) {
            this.setState({
                imageLoad: this.placeholderEnabled ? 'Blink-image-with-placeholder-load' : 'Blink-image-without-placeholder-load',
                placeHolderClass: ''
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
        const imageClass = this.placeholderEnabled ? 'Blink-image-with-placeholder' : 'Blink-image-without-placeholder';
        return(<div className={`${this.props.className} ${this.state.placeHolderClass}`}>
            <img className={`Blink-image-image ${imageClass} ${this.state.imageLoad}`} src={this.props.src} alt="blink" onLoad={this.onImageLoad}/>
        </div>);
    }
}

export default BlinkImage;