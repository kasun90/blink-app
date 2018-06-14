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
        this.index = 0;
        this.prepareCarousel();
        this.carousel();
    }

    prepareCarousel() {
        var imageDivs = document.getElementsByClassName("Favorite-carousel");
        
        for (var i = 0; i < imageDivs.length; i++) {
            imageDivs[i].style.backgroundImage = "url('".concat(this.imagesToLoad[i]).concat("')");
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
        setTimeout(this.carousel, 3000);
    }

    render() {

        var imageDivs = [];

        for (var i = 0; i < this.imagesToLoad.length; i++) {
            imageDivs.push(<div className="Favorite-carousel" key={i}></div>)
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