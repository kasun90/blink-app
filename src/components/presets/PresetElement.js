import React, { Component } from 'react';
import './PresetElement.css';
import Comparison from '../comparison/Comparison';
import BlinkButton from './../blinkbutton/BlinkButton';

class PresetElement extends Component {
    render() {
        return(<div className="PresetEle-container">
            <div className="PresetEle-name">{this.props.data.name}</div>
            <div style={{marginTop: '1vh', marginBottom: '1vh'}}>
                <Comparison before={this.props.data.before} after={this.props.data.after}/>
            </div>
            <BlinkButton>Download</BlinkButton>
        </div>);
    }
}

export default PresetElement;