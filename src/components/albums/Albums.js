import React from 'react';
import './Albums.css';
import './../../common/Colors.css';
import AlbumThumbnail from './AlbumThumbnail';
import BaseAlbum from './BaseAlbum';
import BlinkButton from './../blinkbutton/BlinkButton';

class Albums extends BaseAlbum {

    constructor(props) {
        super(props);
        this.onViewAll = this.onViewAll.bind(this);
        
    }

    onViewAll() {
        window.open("https://www.flickr.com/photos/99108602@N04/albums", "_blank");
    }


    render() {

        const albums = [];
        
        this.albumsMap.forEach((value, key) => {
            albums.push(<AlbumThumbnail src={"./img/" + key + "/1.jpg"} key={key} albumName={value} albumKey={key}/>);
        });

        return(<div className={`Album-container Blink`}>
            <div className="Album-header">Albums</div>
            <div className="Album-Seperator"/>
            <div className="Album-grid">
                {albums}
            </div>
            <BlinkButton className="Album-view-button" onClick={this.onViewAll}>View All</BlinkButton>
        </div>);
    }
}

export default Albums;