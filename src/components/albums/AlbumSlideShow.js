import React, { Component } from 'react';
import './AlbumSlideShow.css';
import Ionicon from 'react-ionicons';
import Colors from '../../common/Colors';

class AlbumSlideShow extends Component {

    currentIndex = 0;

    constructor(props) {
        super(props);
        this.state = {
            isOpen: this.props.isOpen === undefined ? false : this.props.isOpen
        }
        this.onClose = this.onClose.bind(this);
        this.currentIndex = this.props.selectedIndex;
    }

    onClose() {
        this.setState({
            isOpen: false
        });
    }

    componentDidMount() {
        var photoDivs = document.getElementsByClassName('Album-show-photo');

        for (var i = 0; i < photoDivs.length; i++) {
            photoDivs[i].style.display = "none";
        }

        photoDivs[this.currentIndex].style.display = "block";
    }

    componentWillReceiveProps(nextProps, nextState) {
        this.setState({
            isOpen: nextProps.isOpen
        });
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
                <div className="Album-show-arrow-back">
                    <Ionicon icon="md-arrow-back" fontSize="1.5em" color={Colors.Blink}/>
                </div>
                <div className="Album-show-arrow-forward"></div>
                <div className="Album-show-close"></div>
            </div>
        </div>);
    }
}

export default AlbumSlideShow;