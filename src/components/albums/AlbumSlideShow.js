import React, { Component } from 'react';
import './AlbumSlideShow.css';
import Ionicon from 'react-ionicons';
import Colors from '../../common/Colors';

class AlbumSlideShow extends Component {

    currentIndex = 0;
    photosCount = 0;

    constructor(props) {
        super(props);
        this.onClose = this.onClose.bind(this);
        this.currentIndex = this.props.selectedIndex;
        this.photosCount = this.props.photos.length;
    }

    onClose() {
        if (this.props.onClose !== undefined) {
            this.props.onClose();
        }
    }

    componentDidMount() {
        this.setPhoto();
    }

    plusDiv(number) {
        this.currentIndex = this.currentIndex + number;

        if (this.currentIndex > this.photosCount - 1) {
            this.currentIndex = 0;
        }

        if (this.currentIndex < 0) {
            this.currentIndex = this.photosCount - 1;
        }

        this.setPhoto();
    }

    setPhoto() {
        var photoDivs = document.getElementsByClassName('Album-show-photo');

        for (var i = 0; i < photoDivs.length; i++) {
            photoDivs[i].style.display = "none";
        }

        photoDivs[this.currentIndex].style.display = "block";
    }

    render() {

        let _photos = Array.from(this.props.photos);
        
        let photoDivs = [];

        for (var i = 0; i < _photos.length; i++) {
            photoDivs.push(<img className="Album-show-photo" src={_photos[i].url} key={i} alt="albumShow"/>)
        }

        return(<div className="Album-show-main">
            <div className="Album-show-photo-container">
                {photoDivs}
            </div>
            <div className="Album-show-controls">
                <div className="Album-show-arrow-back" onClick={this.plusDiv.bind(this, -1)}>
                    <Ionicon icon="md-arrow-back" fontSize="3em" color={Colors.Blink}/>
                </div>
                <div className="Album-show-arrow-forward" onClick={this.plusDiv.bind(this, 1)}>
                    <Ionicon icon="md-arrow-forward" fontSize="3em" color={Colors.Blink}/>
                </div>
                <div className="Album-show-close" onClick={this.onClose}>
                    <Ionicon icon="md-close-circle" fontSize="3em" color={Colors.Blink}/>
                </div>
            </div>
        </div>);
    }
}

export default AlbumSlideShow;