import React, { Component } from 'react';
import './ArticleThumb.css';
import './../../common/Colors.css';
import {withRouter} from 'react-router-dom';

class ArticleThumb extends Component {

    constructor(props) {
        super(props);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.state = {
            titleClass: 'Blink-paragraph'
        }
    }

    onMouseOver() {
        this.setState({
            titleClass: 'Blink'
        });
    }

    onMouseOut() {
        this.setState({
            titleClass: 'Blink-paragraph'
        });
    }

    render() {
        const _data = this.props.data;
        const date = new Date(_data.timestamp);
        var options = {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'};
        return(<div className="ArticleThumb-container">
            <a style={{textDecoration: 'none'}} href={`${this.props.match.path}/${_data.key}`}> 
                <div className={`ArticleThumb-title ${this.state.titleClass}`}
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
                >{_data.title}</div>
            </a>
            <div className="ArticleThumb-info Blink-paragraph">{_data.views} views . Posted {date.toLocaleString('en-US', options)} . By {_data.author}</div>
        </div>);
    }
}

export default withRouter(ArticleThumb);
