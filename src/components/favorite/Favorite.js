import React, { Component } from 'react';
import './Favorite.css';
import mainImage from './weekly_view.jpg'

class Favorite extends Component {
    render() {
        return (
            <div className="Container">
                <img src={mainImage} className="Main-image" alt="main" />
                <div className="Image-text">Marvelous statues at Panama, Ampara</div>
            </div>
        );
    }
}

export default Favorite;