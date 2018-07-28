import React from 'react';
import './AlbumExpanded.css';
import './../../common/Colors.css';
import AlbumImage from './AlbumImage';
import NoAlbum from './NoAlbum';
import BlinkButton from './../blinkbutton/BlinkButton';
import {withRouter} from 'react-router-dom';
import WithNetwork from '../network/WithNetwork';

class AlbumExpanded extends WithNetwork {

    constructor(props) {
        super(props);
        this.onBack = this.onBack.bind(this);
        this.state = {
            noAlbum : false,
            album : undefined
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

    render() {
        if (this.state.noAlbum || this.state.album === undefined) {
            return(<NoAlbum/>);
        }


        const photos = [];
        const _photos = this.state.album.photos;
        for (var i = 1; i < _photos.length ; i ++) {
            photos.push(<AlbumImage src={_photos[i].url} key={_photos[i].resource}/>);
        }

        return(<div className={`AlbumExp-container Blink`}>
            <div className="AlbumExp-header">{this.state.album.title}</div>
            <div className="AlbumExp-Seperator"/>
            <div className="AlbumExp-grid">
                {photos}
            </div>
            <BlinkButton className="AlbumExp-back-button" onClick={this.onBack}>Back to Albums</BlinkButton>
        </div>);
    }
}

export default withRouter(AlbumExpanded);