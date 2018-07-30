import React, { Component } from 'react';
import './AlbumExpanded.css';

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
        return(<div className="AlbumExp-image-container">
            <img className="AlbumExp-image-image" src={this.props.src} alt="album_image" onClick={this.onSelect}/>
        </div>);
    }
}

export default AlbumImage;