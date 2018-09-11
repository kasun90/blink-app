import React, { Component } from 'react';
import './../../common/Colors.css';
import './ArticleView.css';
import BlinkButton from './../blinkbutton/BlinkButton';
import {withRouter} from 'react-router-dom';

class NoArticle extends Component {
    constructor(props) {
        super(props);
        this.onBack = this.onBack.bind(this);
    }

    onBack() {
        this.props.history.push('/articles');
    }

    render() {
        return(<div className={`NoArticle-container Blink`}>
            <div>No Article here</div>
            <BlinkButton onClick={this.onBack}>Back to Articles</BlinkButton>
        </div>);
    }
}

export default withRouter(NoArticle);