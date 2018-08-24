import React, { Component } from 'react';
import './PresetElement.css';
import Comparison from '../comparison/Comparison';

class PresetElement extends Component {
    render() {
        return(<div className="PresetEle-container">
            <div className="PresetEle-name">{this.props.data.title}</div>
            <div style={{marginTop: '1vh', marginBottom: '1vh'}}>
                <Comparison before={this.props.data.beforeImage.url} after={this.props.data.afterImage.url}/>
            </div>
            <a href={this.props.data.templateFile.url} 
            style={{color: 'inherit', fontSize: '1.5em'}} 
            download>Download</a>
        </div>);
    }
}

export default PresetElement;