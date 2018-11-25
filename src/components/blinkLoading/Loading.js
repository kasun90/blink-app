import React, { Component } from 'react';
import './Loading.css';
import BlinkSpinner from './../blinkSpinner/BlinkSpinner';

class Loading extends Component {
    render() {
        return(<div className="Loading-container">
            <div className="Loading-spinner">
                <BlinkSpinner pushEvent={{eventCount: 0}}/>
            </div>
        </div>);
    }
}

export default Loading;