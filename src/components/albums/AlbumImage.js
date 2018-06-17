import React, { Component } from 'react';
import './AlbumExpanded.css';

class AlbumImage extends Component {
    
    
    render() {
        return(<div className="AlbumExp-image-container">
            <img className="AlbumExp-image-image" src={require(`${this.props.src}`)} alt="album_image"/>
        </div>);
    }
}

export default AlbumImage;