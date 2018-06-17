import React, { Component } from 'react';
import './Albums.css';
import {withRouter} from 'react-router-dom';

class AlbumThumbnail extends Component {

    constructor(props) {
        super(props);
        this.onAlbumView = this.onAlbumView.bind(this);
    }

    onAlbumView() {
        this.props.history.push('/albums/view/' + this.props.albumKey);
    }



    render() {
        return(<div className="Album-thumbnail-container">
                <img className="Album-thumbnail-image" src={require(`${this.props.src}`)} alt="thumbnail" onClick={this.onAlbumView}/>
            <div className="Album-name-text">{this.props.albumName}</div>
        </div>);
    }
}

export default withRouter(AlbumThumbnail);
