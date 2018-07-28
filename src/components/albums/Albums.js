import React from 'react';
import './Albums.css';
import './../../common/Colors.css';
import AlbumThumbnail from './AlbumThumbnail';
import BlinkButton from './../blinkbutton/BlinkButton';
import WithNetwork from '../network/WithNetwork';

class Albums extends WithNetwork {

    constructor(props) {
        super(props);
        this.onViewAll = this.onViewAll.bind(this);
        this.state = {
            albums: []
        };
    }

    componentDidMount() {
        window.scroll(0,0);
        this.requestAlbums(0, true, 10);
    }

    onViewAll() {
        window.open("https://www.flickr.com/photos/99108602@N04/albums", "_blank");
    }

    requestAlbums(timestamp, less, limit) {
        var req = WithNetwork.buildMessage('com.blink.shared.client.album.AlbumsRequestMessage');
        req.timestamp = timestamp;
        req.less = less;
        req.limit = limit;

        this.send(req, (response, error) => {
            if (error === undefined) {
                this.setState({
                    albums: Array.from(response.albums)
                });
            }
        });
    }


    render() {

        const albums = [];

        this.state.albums.forEach((value) => {
            albums.push(<AlbumThumbnail src={value.cover.url} key={value.key} albumName={value.title} albumKey={value.key}/>);
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