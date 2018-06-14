import React, { Component } from 'react';
import './Home.css';
import Favorite from './../favorite/Favorite';
import Highlights from './../highlights/Highlights';
import BookMe from './../bookme/BookMe';

class Home extends Component {
    render() {
        return (
            <div>
                <Favorite/>
                <Highlights/>
                <BookMe/>
            </div>
        );
    }
}

export default Home;