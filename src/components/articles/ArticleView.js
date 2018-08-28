import React, { Component } from 'react';
import './ArticleView.css';
import './../../App.css';
import './../../common/Colors.css';
import {withRouter} from 'react-router-dom';

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
                You should be having a compressed preset file downloaded from the <a className="Blink" href="/presets">presets</a> page 
                when you read this article. <br/><br/>
                Extract the compressed file. 
            </div>
        </div>);
    }
}

export default withRouter(ArticleView);


