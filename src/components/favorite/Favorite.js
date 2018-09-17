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


class Favorite extends Component {

    isContainerMounted = true;
    loadedImages = 0;

    constructor(props) {
        super(props);
        this.carousel = this.carousel.bind(this);
        this.imagesToLoad = [img1,
        img2,
        img3,
        img4,
        img5,
        img6];
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
            imageDivs[i].style.display = "none";
        }
        
        
        
        imageDivs[this.index].style.display = "block";


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
        this.loadedImages++;

        if (this.loadedImages === this.imagesToLoad.length) {
            var imageDivs = document.getElementsByClassName("Favorite-carousel");
        
            for (var i = 0; i < imageDivs.length; i++) {
                imageDivs[i].style.opacity = "1";
            }
            this.carousel();
        }
    }

    render() {

        var imageDivs = [];

        for (var i = 0; i < this.imagesToLoad.length; i++) {
            const imageID = `carousel-${i}`
            const image = new Image();
            image.src = this.imagesToLoad[i];
            image.onload = this.onImageLoad.bind(this, imageID, i)
            imageDivs.push(<div id={imageID} className="Favorite-carousel" key={i}></div>)
        }

        return (
            <div id="favorite-container" className="Favorite-container">
                {imageDivs}
                <div className="Favorite-overlay">
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