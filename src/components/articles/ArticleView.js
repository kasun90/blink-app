import React, { Component } from 'react';
import './ArticleView.css';
import './../../App.css';
import './../../common/Colors.css';
import {withRouter} from 'react-router-dom';
import howto from './img/howto.jpg';
import BlinkImage from '../blinkImage/BlinkImage';

class ArticleView extends Component {
    render() {
        const _data = {
            title: 'How to install custom presets on Lightroom',
            author: 'Kasun Piyumal',
            date: 'August 28, 2018',
            views: 3,
            key: 'how-to-install-custom-presets-on-lightroom'
        }

        return(<div className={`Common-container Blink`}>
            <div className="Common-title-medium">{_data.title}</div>
            <div className="Common-seperator"/>
            <div className="ArticleView-container Blink-paragraph">
                <p>You should be having a compressed preset file downloaded from the <a className="Blink" href="/presets">presets</a> page 
                when you read this article. Extract the compressed file.</p>
                <h2>For Lightroom CC 2018</h2>
                <p>You can now install Lightroom presets straight from the plus sign under the Presets dialogue when you are in the Develop Module in Lightroom. 
                    Navigate to where you have extracted the compressed file.
                </p>
                <BlinkImage src={howto}/>
                <h2>How to install Lightroom 4, 5, 6 & CC 2017 presets for Windows</h2>
                <ol>
                    <li>Open Lightroom</li>
                    <li>Go to: Edit -> Preferences -> Presets</li>
                    <li>Click on the box titled: <strong>Show Lightroom Presets Folder</strong></li>
                    <li>Double click on Lightroom</li>
                    <li>Double click on Develop Presets</li>
                    <li>Copy the folder(s) of your presets into the <strong>Develop Presets</strong> folder</li>
                    <li>Restart Lightroom</li>
                </ol>
                <h2>How to install Lightroom 4, 5, 6 & CC 2017 presets for Mac</h2>
                <ol>
                    <li>Open Lightroom</li>
                    <li>Go to: Lightroom (Dialogue) -> Preferences -> Presets</li>
                    <li>Click on the box titled: <strong>Show Lightroom Presets Folder</strong></li>
                    <li>Double click on Lightroom</li>
                    <li>Double click on Develop Presets</li>
                    <li>Copy the folder(s) of your presets into the <strong>Develop Presets</strong> folder</li>
                    <li>Restart Lightroom</li>
                </ol>
            </div>
        </div>);
    }
}

export default withRouter(ArticleView);


