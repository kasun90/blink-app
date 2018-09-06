import React, { Component } from 'react';
import './Articles.css';
import './../../App.css';
import './../../common/Colors.css';
import ArticleThumb from './ArticleThumb';
import BlinkTextField from './../blinktextfield/BlinkTextField';

class Articles extends Component {

    componentDidMount() {
        window.scroll(0, 0);
    }

    render() {

        const _data = {
            title: 'How to install custom presets on Lightroom',
            author: 'Kasun Piyumal',
            date: 'August 28, 2018',
            views: 3,
            key: 'how-to-install-custom-presets-on-lightroom'
        }

        return(<div className={`Common-container Blink`}>
            <div className="Common-title">Articles</div>
            <div className="Common-seperator"/>
            <div className="Article-search">
            <BlinkTextField type="text" placeholder="Search"/>
            </div>
            <div className="Article-container">
                <ArticleThumb data={_data}/>
            </div>
        </div>);
    }
}

export default Articles;