import React from 'react';
import './ArticleView.css';
import './../../App.css';
import './../../common/Colors.css';
import {withRouter} from 'react-router-dom';
import BlinkImage from '../blinkImage/BlinkImage';
import WithNetwork from '../network/WithNetwork';
import NoArticle from './NoArticle';

class ArticleView extends WithNetwork {

    constructor(props) {
        super(props);
        this.state = {
            article: undefined,
            noArticle: false
        }
    }


    componentDidUpdate() {
        if (window.FB) {
            window.FB.XFBML.parse();
        }
    }

    componentDidMount() {
        window.scroll(0,0);
        this.requestArticle();
        this.incrementViewCount();
    }

    incrementViewCount() {
        var req = WithNetwork.buildMessage('com.blink.shared.client.article.ArticleViewAckMessage');
        req.key = this.props.match.params.articleKey;

        this.send(req, (response, error) => {
            
        });
    }

    requestArticle() {
        var req = WithNetwork.buildMessage('com.blink.shared.client.article.ArticleDetailsRequestMessage');
        req.key = this.props.match.params.articleKey;

        this.send(req, (response, error) => {
            if (error === undefined) {
                if (response.article) {
                    this.setState({
                        article: response.article
                    });
                } else {
                    this.setState({
                        noArticle: true
                    });
                }
            }
        });
    }

    render() {

        if (this.state.noArticle || this.state.article === undefined) {
            return(<NoArticle/>);
        }

        const _article = this.state.article;
        const date = new Date(_article.timestamp);
        var options = {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'};

        const atags = [];

        const _tags = Array.from(_article.tags);
        for (var i = 0; i < _tags.length; i++) {
            atags.push(this.deriveTag(_tags[i], i));
        }

        return(<div className={`Common-container Blink`}>
            <div className="Common-title-medium">{_article.title}</div>
            <div style={{fontSize: '0.8em'}}>{_article.views} views . Posted {date.toLocaleString('en-US', options)} . By {_article.author}</div>
            <div className="Common-seperator"/>
            <div className="ArticleView-container Blink-paragraph">
                {atags}
            </div>
            <div className="fb-comments" data-href={window.location.href} data-numposts="5" data-width="100%"></div>
        </div>);
    }

    deriveTag(atag, index) {
        switch(atag.type) {
            case 'PARAGRAPH':
                return this.deriveParagraph(atag, index);
            case 'HEADER':
                return this.deriveHeader(atag, index);
            case 'NOTE':
                return this.deriveNote(atag, index);
            case 'IMAGE':
                return this.deriveImage(atag, index);
            case 'LIST':
                return this.deriveList(atag, index);
            case 'ORDERED_LIST':
                return this.deriveOrderedList(atag, index);
            case 'CODE':
                return this.deriveCode(atag, index);
            case 'TERMINAL':
                return this.deriveTerminal(atag, index);
            default:
                break;
        }
    }

    deriveParagraph(atag, index) {
        const _children = Array.from(atag.data.children);
        var content = [];
        var i = 0;
        _children.forEach((tag) => {
            switch(tag.type) {
                case 'TEXT':
                    content.push(tag.data.value);
                    break;
                case 'LINK':
                    content.push(<a className="Blink" href={tag.data.url}>{tag.data.value}</a>);
                    break;
                case 'STRONG_TEXT':
                    content.push(<strong key={i}>{tag.data.value}</strong>)
                    break;
                default:
                    break;
            }
            i++;
        });
        return <p className="ArticleView-element" key={index}>{content}</p>;
    }

    deriveHeader(atag, index) {
        const BlinkHeader = `h${atag.data.size}`;
        return <BlinkHeader className="ArticleView-element" key={index}>{atag.data.value}</BlinkHeader>
    }

    deriveNote(atag, index) {
        return <div className="Blink-background ArticleView-element" style={{color: 'white'}}><p style={{padding: '1em'}} key={index}>{atag.data.value}</p></div>
    }

    deriveImage(atag, index) {
        return <BlinkImage className="ArticleView-image" key={index} src={atag.data.url}/>
    }

    deriveList(atag, index) {
        const _children = Array.from(atag.data.children);
        var content = [];
        var i = 0;
        _children.forEach((tag) => {
            switch(tag.type) {
                case 'TEXT':
                    content.push(<li key={i++}>{tag.data.value}</li>);
                    break;
                case 'RICH_TEXT':
                    content.push(<li key={i++}>{this.deriveRichText(tag)}</li>);
                    break;
                default:
                    break;
            }
        });
        return <ul className="ArticleView-element" key={index}>{content}</ul>
    }

    deriveOrderedList(atag, index) {
        const _children = Array.from(atag.data.children);
        var content = [];
        var i = 0;
        _children.forEach((tag) => {
            switch(tag.type) {
                case 'TEXT':
                    content.push(<li key={i++}>{tag.data.value}</li>);
                    break;
                case 'RICH_TEXT':
                    content.push(<li key={i++}>{this.deriveRichText(tag)}</li>);
                    break;
                default:
                    break;
            }
        });
        return <ol className="ArticleView-element" key={index}>{content}</ol>
    }

    deriveRichText(atag) {
        const _children = Array.from(atag.data.children);
        var content = [];
        _children.forEach((tag) => {
            switch(tag.type) {
                case 'TEXT':
                    content.push(tag.data.value);
                    break;
                case 'STRONG_TEXT':
                    content.push(<strong>{tag.data.value}</strong>)
                    break;
                default:
                    break;
            }
        });
        return content;
    }

    deriveCode(atag, index) {
        const _lines = Array.from(atag.data.lines);
        var content = [];
        var i = 0;
        _lines.forEach((tag) => {
            switch(tag.type) {
                case 'TEXT':
                    content.push(tag.data.value);
                    content.push(<br key={i++}/>);
                    break;
                default:
                    break;
            }
        });
        return <div className="ArticleView-element ArticleView-code" style={{color: 'black'}} key={index}>
        <pre className="ArticleView-terminal Blink-code-background" style={{padding: '1em'}}>
            {content}
        </pre>
        </div>;
    }

    deriveTerminal(atag, index) {
        const _commands = Array.from(atag.data.commands);
        var content = [];
        var i = 0;
        _commands.forEach((tag) => {
            switch(tag.type) {
                case 'TEXT':
                    content.push(<li prefix="$" key={i++}>{tag.data.value}</li>);
                    break;
                default:
                    break;
            }
        });
        return <div className="ArticleView-element ArticleView-code" style={{color: 'black'}} key={index}>
                    <pre className="ArticleView-terminal Blink-code-background">
                        <ul className="ArticleView-terminal-list" key={index}>{content}</ul>
                    </pre>
                    
            </div>;
    }
}

export default withRouter(ArticleView);


