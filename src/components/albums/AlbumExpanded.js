import React from 'react';
import './AlbumExpanded.css';
import './../../common/Colors.css';
import BaseAlbum from './BaseAlbum';
import AlbumImage from './AlbumImage';
import NoAlbum from './NoAlbum';
import BlinkButton from './../blinkbutton/BlinkButton';
import {withRouter} from 'react-router-dom';

class AlbumExpanded extends BaseAlbum {

    constructor(props) {
        super(props);
        this.onBack = this.onBack.bind(this);
    }

    componentDidMount() {
        window.scroll(0,0);
    }

    onBack() {
        this.props.history.push('/albums');
    }

    render() {

        var key = window.location.pathname;
        key = key.substring(key.lastIndexOf("/") + 1 , key.length);

        if (!this.albumsMap.has(key)) {
            return(<NoAlbum/>);
        }


        const photos = [];

        for (var i = 1; i <= 6 ; i ++) {
            photos.push(<AlbumImage src={"./img/" + key + "/" + i +".jpg"}/>);
        }

        return(<div className={`AlbumExp-container Blink`}>
            <div className="AlbumExp-header">{this.albumsMap.get(key)}</div>
            <div className="AlbumExp-Seperator"/>
            <div className="AlbumExp-grid">
                {photos}
            </div>
            <BlinkButton className="AlbumExp-back-button" onClick={this.onBack}>Back to Albums</BlinkButton>
        </div>);
    }
}

export default withRouter(AlbumExpanded);