import React from 'react';
import './Articles.css';
import './../../App.css';
import './../../common/Colors.css';
import ArticleThumb from './ArticleThumb';
import BlinkTextField from './../blinktextfield/BlinkTextField';
import BlinkButton from './../blinkbutton/BlinkButton';
import WithNetwork from '../network/WithNetwork';

class Articles extends WithNetwork {

    timestamp = 0;
    limit = 10;

    constructor(props) {
        super(props);
        this.onShowMore = this.onShowMore.bind(this);
        this.state = {
            articles: [],
            hasMore: false
        }
    }

    componentDidMount() {
        window.scroll(0, 0);
        this.requestArticles(this.timestamp, true, this.limit);
    }

    requestArticles(timestamp, less, limit) {
        var req = WithNetwork.buildMessage('com.blink.shared.client.article.ArticlesRequestMessage');
        req.timestamp = timestamp;
        req.less = less;
        req.limit = limit;

        this.send(req, (resonse, error) => {
            if (error === undefined) {
                const _articles = Array.from(resonse.articles);
                this.setState({
                    articles: this.state.articles.concat(_articles.map((value) => {
                        if (this.timestamp === 0 || this.timestamp > value.timestamp) {
                            this.timestamp = value.timestamp;
                        }
                        return <ArticleThumb data={value} key={value.key}/>
                    })),
                    hasMore: _articles.length === this.limit
                });
            }
        });
    }

    onShowMore() {
        this.requestArticles(this.timestamp, true, this.limit);
    }

    render() {
        return(<div className={`Common-container Blink`}>
            <div className="Common-title">Articles</div>
            <div className="Common-seperator"/>
            <div className="Article-search">
            <BlinkTextField type="text" placeholder="Search"/>
            </div>
            <div className="Article-container">
                {this.state.articles}
            </div>
            {this.state.hasMore && <BlinkButton className="Article-view-button" onClick={this.onShowMore}>Show More</BlinkButton>}
        </div>);
    }
}

export default Articles;