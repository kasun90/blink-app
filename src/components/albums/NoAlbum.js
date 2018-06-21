import React, { Component } from 'react';
import './AlbumExpanded.css';
import './../../common/Colors.css';
import BlinkButton from './../blinkbutton/BlinkButton';
import {withRouter} from 'react-router-dom';

class NoAlbum extends Component {

    constructor(props) {
        super(props);
        this.onBack = this.onBack.bind(this);
    }

    onBack() {
        this.props.history.push('/albums');
    }

    render() {
        return(<div className={`NoAlbum-container Blink`}>
            <div>No Album here</div>
            <BlinkButton onClick={this.onBack}>Back to Albums</BlinkButton>
        </div>);
    }
}

export default withRouter(NoAlbum);