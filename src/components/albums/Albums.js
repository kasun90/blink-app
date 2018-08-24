import React from 'react';
import './Albums.css';
import './../../common/Colors.css';
import './../../App.css';
import AlbumThumbnail from './AlbumThumbnail';
import BlinkButton from './../blinkbutton/BlinkButton';
import WithNetwork from '../network/WithNetwork';

class Albums extends WithNetwork {

    timestamp = 0;
    limit = 10;

    constructor(props) {
        super(props);
        this.onShowMore = this.onShowMore.bind(this);
        this.state = {
            albums: [],
            hasMore: false
        };
    }

    componentDidMount() {
        window.scroll(0,0);
        this.requestAlbums(this.timestamp, true, this.limit);
    }

    requestAlbums(timestamp, less, limit) {
        var req = WithNetwork.buildMessage('com.blink.shared.client.album.AlbumsRequestMessage');
        req.timestamp = timestamp;
        req.less = less;
        req.limit = limit;

        this.send(req, (response, error) => {
            if (error === undefined) {
                const _albums = Array.from(response.albums)
                this.setState({
                    albums: this.state.albums.concat(_albums.map((value) => {
                        if (this.timestamp === 0 || this.timestamp > value.timestamp) {
                            this.timestamp = value.timestamp;
                        }
                        return <AlbumThumbnail src={value.cover.url} key={value.key} albumName={value.title} albumKey={value.key}/>
                    })),
                    hasMore: _albums.length === this.limit
                });
            }
        });
    }

    onShowMore() {
        this.requestAlbums(this.timestamp, true, this.limit);
    }


    render() {
        return(<div className={`Common-container Blink`}>
            <div className="Common-title">Albums</div>
            <div className="Common-seperator"/>
            <div className="Album-grid">
                {this.state.albums}
            </div>
            {this.state.hasMore && <BlinkButton className="Album-view-button" onClick={this.onShowMore}>Show More</BlinkButton>}
            <a style={{color: 'inherit', marginTop: '1em'}} href="https://www.flickr.com/photos/99108602@N04/albums" rel="noopener noreferrer" target="_blank">
                View All
            </a>
        </div>);
    }
}

export default Albums;