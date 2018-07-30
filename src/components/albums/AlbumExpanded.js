import React from 'react';
import './AlbumExpanded.css';
import './../../common/Colors.css';
import AlbumImage from './AlbumImage';
import NoAlbum from './NoAlbum';
import BlinkButton from './../blinkbutton/BlinkButton';
import {withRouter} from 'react-router-dom';
import WithNetwork from '../network/WithNetwork';
import AlbumSlideShow from './AlbumSlideShow';

class AlbumExpanded extends WithNetwork {

    constructor(props) {
        super(props);
        this.onBack = this.onBack.bind(this);
        this.onPhotoSelect = this.onPhotoSelect.bind(this);
        this.state = {
            noAlbum : false,
            album : undefined,
            openShow: false,
            selectedIndex: undefined
        }
    }

    componentDidMount() {
        window.scroll(0,0);

        var req = WithNetwork.buildMessage('com.blink.shared.client.album.AlbumDetailsRequestMessage');
        req.key = this.props.match.params.albumKey;

        this.send(req, (response, error) => {
            if (error === undefined) {
                if (response.album) {
                    this.setState({
                        album: response.album
                    });
                } else {
                    this.setState({
                        noAlbum: true
                    });
                }
                
            }
        });

    }

    onBack() {
        this.props.history.push('/albums');
    }

    onPhotoSelect(index) {
        this.setState({
            selectedIndex: index,
            openShow: true
        });
    }

    render() {
        if (this.state.noAlbum || this.state.album === undefined) {
            return(<NoAlbum/>);
        }


        const photos = [];
        const _photos = this.state.album.photos;
        for (var i = 0; i < _photos.length ; i ++) {
            photos.push(<AlbumImage src={_photos[i].url} photoIndex={i} key={_photos[i].resource} onSelect={this.onPhotoSelect}/>);
        }

        const headerStyle = {
            backgroundImage: `url(${this.state.album.cover.url})`
        }

        return(<div className={`AlbumExp-container Blink`}>
            <div style={headerStyle} className="AlbumExp-header">
                <div className="AlbumExp-header-title">{this.state.album.title}</div>
                <div className="AlbumExp-header-desc">{this.state.album.description}</div>
            </div>
            <div className="AlbumExp-sub-container">
                <div className="AlbumExp-grid">
                    {photos}
                </div>
                <BlinkButton className="AlbumExp-back-button" onClick={this.onBack}>Back to Albums</BlinkButton>
            </div>
            {this.state.openShow && <AlbumSlideShow photos={this.state.album.photos} selectedIndex={this.state.selectedIndex}/>}
        </div>);
    }
}

export default withRouter(AlbumExpanded);