import React, { Component } from 'react';
import './AlbumExpanded.css';
import BlinkImage from '../blinkImage/BlinkImage';

class AlbumImage extends Component {
    
    constructor(props) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect() {
        if (this.props.onSelect !== undefined) {
            this.props.onSelect(this.props.photoIndex);
        }
    }
    
    render() {
        return(<div className="AlbumExp-image-container" onClick={this.onSelect}>
            <BlinkImage className="AlbumExp-image-image" src={this.props.src}/>
        </div>);
    }
}

export default AlbumImage;