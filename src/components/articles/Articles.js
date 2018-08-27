import React, { Component } from 'react';
import './Articles.css';
import './../../App.css';
import './../../common/Colors.css';

class Articles extends Component {
    render() {
        return(<div className={`Common-container Blink`}>
            <div className="Common-title">Articles</div>
            <div className="Common-seperator"/>
            <div className="Article-container"></div>
        </div>);
    }
}

export default Articles;