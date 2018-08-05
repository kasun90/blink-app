import React, { Component } from 'react';
import './Presets.css';
import './../../common/Colors.css';
import './../../App.css';
import before from './img/before.jpg';
import after from './img/after.jpg';
import PresetElement from './PresetElement';

class Presets extends Component {
    render() {
        let _data = {
            name: "Allure",
            before: before,
            after: after
        }

        return(<div className={`Common-container Blink`}>
            <div className="Common-title">Presets</div>
            <div className="Common-seperator"/>
            <div style={{fontSize: '0.8em'}}>
                <i>Hover or drag on the image to move the slider</i>
            </div>
            <div className="Preset-container">
                <PresetElement data={_data}/>
            </div>
        </div>);
    }
}

export default Presets;