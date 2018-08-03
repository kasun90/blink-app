import React, { Component } from 'react';
import './Presets.css';
import './../../common/Colors.css';
import './../../App.css';
import before from './img/before.jpg';
import after from './img/after.jpg';
import Comparison from '../comparison/Comparison';

class Presets extends Component {
    render() {
        return(<div className={`Common-container Blink`}>
            <div className="Common-title">Presets</div>
            <div className="Common-seperator"/>
            <div className="Preset-container">
                <Comparison before={before} after={after}/>
            </div>
        </div>);
    }
}

export default Presets;