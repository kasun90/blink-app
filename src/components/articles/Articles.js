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
        this.onSearch = this.onSearch.bind(this);
        this.state = {
            articles: [],
            hasMore: false,
            searchStr: ''
        }
    }

    componentDidMount() {
        window.scroll(0, 0);
        this.timestamp = 0;
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

    onSearch(event) {
        const _searchStr = event.target.value;
        this.setState({
            searchStr: _searchStr
        });

        if (_searchStr === '') {
            this.timestamp = 0;
            this.setState({
                articles: [],
                hasMore: false
            });
            this.requestArticles(this.timestamp, true, this.limit);
            return;
        }

        var req = WithNetwork.buildMessage('com.blink.shared.client.article.ArticleSearchRequestMessage');
        req.keyPhrase = _searchStr;

        this.send(req, (response, error) => {
            if (error === undefined) {
                const _articles = Array.from(response.articles);
                if (_articles.length === 0) {
                    this.setState({
                        articles: [<p className="NoArticle-view NoArticle-view">No Articles</p>]
                    });
                } else {
                    this.setState({
                        articles: _articles.map((value) => {
                            return <ArticleThumb data={value} key={value.key}/>
                        })
                    });
                }
            }
        });
    }

    render() {
        return(<div className={`Common-container Blink`}>
            <div className="Common-title">Articles</div>
            <div className="Common-seperator"/>
            <div className="Article-search">
            <BlinkTextField type="text" placeholder="Search" value={this.state.searchStr} onChange={this.onSearch}/>
            </div>
            <div className="Article-container">
                {this.state.articles}
            </div>
            {this.state.hasMore && <BlinkButton className="Article-view-button" onClick={this.onShowMore}>Show More</BlinkButton>}
        </div>);
    }
}

export default Articles;