import React, { Component } from 'react';
import './Favorite.css';
import './../../common/Colors.css';
import mainImage from './logo.svg';

import img1 from './carousel/1.jpg';
import img2 from './carousel/2.jpg';
import img3 from './carousel/3.jpg';
import img4 from './carousel/4.jpg';
import img5 from './carousel/5.jpg';
import img6 from './carousel/6.jpg';

import Ionicon from 'react-ionicons';
import Colors from './../../common/Colors';
import BlinkSpinner from './../blinkSpinner/BlinkSpinner';


class Favorite extends Component {

    isContainerMounted = true;
    imageDivs = [];

    constructor(props) {
        super(props);
        this.carousel = this.carousel.bind(this);
        this.imagesToLoad = [img1,
        img2,
        img3,
        img4,
        img5,
        img6];
        this.state = {
            loadingDone: false,
            loadedImages: 0
        }

        for (var i = 0; i < this.imagesToLoad.length; i++) {
            const imageID = `carousel-${i}`
            const image = new Image();
            image.src = this.imagesToLoad[i];
            image.onload = this.onImageLoad.bind(this, imageID, i)
            this.imageDivs.push(<div id={imageID} className="Favorite-carousel" key={i}></div>)
        }
    }

    componentDidMount() {
        this.isContainerMounted = true;
        this.index = 0;
        this.prepareCarousel();
    }

    prepareCarousel() {
        var imageDivs = document.getElementsByClassName("Favorite-carousel");
        
        for (var i = 0; i < imageDivs.length; i++) {
            imageDivs[i].style.opacity = "0";
        }
    }


    carousel() {
        var imageDivs = document.getElementsByClassName("Favorite-carousel");
        
        for (var i = 0; i < imageDivs.length; i++) {
            imageDivs[i].style.opacity = "0";
        }
        
        imageDivs[this.index].style.opacity = "1";


        this.index++;

        if (this.index === this.imagesToLoad.length) {
            this.index = 0;
        }
        this.timer = setTimeout(this.carousel, 3000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
        this.isContainerMounted = false;
    }

    onImageLoad(htmlID, index) {
        if (!this.isContainerMounted) {
            return;
        }

        var imageDiv = document.getElementById(htmlID);
        imageDiv.style.backgroundImage = "url('".concat(this.imagesToLoad[index]).concat("')");
        this.setState({
            loadedImages: this.state.loadedImages + 1
        });

        if (this.state.loadedImages === this.imagesToLoad.length) {
            var imageDivs = document.getElementsByClassName("Favorite-carousel");
        
            for (var i = 0; i < imageDivs.length; i++) {
                imageDivs[i].style.opacity = "1";
            }
            this.setState({
                loadingDone: true
            });
            this.carousel();
        }
    }

    render() {
        return (
            <div id="favorite-container" className="Favorite-container">
                {this.imageDivs}
                <div className="Favorite-overlay">
                    <div className="Favorite-spinner">
                        <BlinkSpinner percentageEnabled={true} done={this.state.loadingDone} pushEvent={{imageCount: this.state.loadedImages}} totalEvents={this.imagesToLoad.length}/>
                    </div>
                    <img src={mainImage} className="Main-logo-image" alt="main" />
                    <div className={`Favorite-main-text Blink`}>REVIVING MEMORIES</div>
                    <div className="Blink">Scroll for more</div>
                    <Ionicon className="Favorite-icon" icon="ios-arrow-down" fontSize="1.5em" color={Colors.Blink}/>
                </div>
                
            </div>
        );
    }
}




export default Favorite;