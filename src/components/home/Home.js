import React, { Component } from 'react';
import './Home.css';
import Favorite from './../favorite/Favorite';
import Highlights from './../highlights/Highlights';
import BookMe from './../bookme/BookMe';
import Subscribe from '../subscribe/Subscribe';

class Home extends Component {
    render() {
        return (
            <div>
                <Favorite/>
                <Highlights/>
                <Subscribe/>
                <BookMe/>
            </div>
        );
    }
}

export default Home;