import React from 'react';
import './ArticleView.css';
import './../../App.css';
import './../../common/Colors.css';
import {withRouter} from 'react-router-dom';
//import BlinkImage from '../blinkImage/BlinkImage';
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
            <div className="fb-comments" data-href={window.location.href} data-numposts="5"></div>
        </div>);
    }

    deriveTag(atag, index) {
        switch(atag.type) {
            case 'PARAGRAPH':
                return this.deriveParagraph(atag, index);
            case 'HEADER':
                return this.deriveHeader(atag, index);
            default:
                break;
        }
    }

    deriveParagraph(atag, index) {
        const _children = Array.from(atag.data.children);
        var content = [];
        _children.forEach((tag) => {
            switch(tag.type) {
                case 'TEXT':
                    content.push(tag.data.value);
                    break;
                case 'LINK':
                    content.push(<a className="Blink" href={tag.data.url}>{tag.data.value}</a>);
                    break;
                default:
                    break;
            }
        });
        return <p key={index}>{content}</p>;
    }

    deriveHeader(atag, index) {
        const BlinkHeader = `h${atag.data.size}`;
        return <BlinkHeader key={index}>{atag.data.value}</BlinkHeader>
    }
}

export default withRouter(ArticleView);


/* <p>You should be having a compressed preset file downloaded from the <a className="Blink" href="/presets">presets</a> page 
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
                </ol> */


