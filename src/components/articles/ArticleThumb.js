import React, { Component } from 'react';
import './ArticleThumb.css';
import './../../common/Colors.css';
import {Link, withRouter} from 'react-router-dom';

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
        return(<div className="ArticleThumb-container">
            <Link style={{ textDecoration: 'none', color: 'inherit'}} to={`${this.props.match.path}/${_data.key}`}> 
                <div className={`ArticleThumb-title ${this.state.titleClass}`}
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
                >{_data.title}</div>
            </Link>
            <div className="ArticleThumb-info Blink-paragraph">{_data.views} views . Posted {_data.date} . By {_data.author}</div>
        </div>);
    }
}

export default withRouter(ArticleThumb);
