import React, { Component } from 'react';
import './Favorite.css';
import './../../common/Colors.css';
import mainImage from './weekly_view2.jpg'
import Ionicon from 'react-ionicons';
import Colors from './../../common/Colors';

class Favorite extends Component {
    render() {
        return (
            <div className="Favorite-container">
                <div className="Main-image-container">
                    <img src={mainImage} className="Main-image" alt="main" />
                    <div className="Favorite-overlay">
                        <div className={`Overlay-content Blink`}>
                            <Ionicon icon="md-aperture" fontSize="2.5vw" color={Colors.Blink}/>
                            <div>View Full Album</div>
                        </div>  
                    </div>
                </div>
                
                <div className="Image-text">Marvelous statues at Panama, Ampara</div>
            </div>
        );
    }
}

export default Favorite;