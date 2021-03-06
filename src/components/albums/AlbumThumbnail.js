import React, { Component } from 'react';
import './Albums.css';
import {withRouter} from 'react-router-dom';
import BlinkImage from './../blinkImage/BlinkImage';

class AlbumThumbnail extends Component {

    constructor(props) {
        super(props);
        this.onAlbumView = this.onAlbumView.bind(this);
    }

    onAlbumView() {
        this.props.history.push('/albums/view/' + this.props.albumKey);
    }



    render() {
        return(<div className="Album-thumbnail-container" onClick={this.onAlbumView}>
                <div className="Album-thumbnail-image-container">
                    <BlinkImage className="Album-thumbnail-image" src={this.props.src} placeholderEnabled={true}/>
                    <div className="Album-thumbnail-footer Blink-background">
                        <div className="Album-name-text">{this.props.albumName}</div>
                        <div className="Album-name-sub-text">{this.props.albumDescription}</div>
                    </div>
                    
                </div>
        </div>);
    }
}

export default withRouter(AlbumThumbnail);
