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
                <BlinkImage className="Album-thumbnail-image" src={this.props.src}/>
            <div className="Album-name-text">{this.props.albumName}</div>
        </div>);
    }
}

export default withRouter(AlbumThumbnail);
