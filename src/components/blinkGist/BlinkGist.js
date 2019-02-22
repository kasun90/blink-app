import React, { Component } from 'react';
import './BlinkGist.css';
import './../../common/Colors.css';
import PropTypes from 'prop-types';
import BlinkSpinner from './../blinkSpinner/BlinkSpinner';

class BlinkGist extends Component {

    constructor(props) {
        super(props);
        this.gist = props.gist;
        this.file = props.file
        this.stylesheetAdded = false;
        this.state = {
            loading: true,
            src: ""
        }
        this.gistSrcSet = this.gistSrcSet.bind(this);
    }

    addStylesheet = (href) => {
        if (!this.stylesheetAdded) {
            var link = document.createElement('link');
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href = href;
            document.head.appendChild(link);
            this.stylesheetAdded = true;
        }
    }

    componentDidMount() {
        var gistCallback = BlinkGist.nextGistCallback();
        window[gistCallback] = this.gistSrcSet;

        var url = "https://gist.github.com/" + this.props.gist + ".json?callback=" + gistCallback;

        if (this.props.file) {
            url += "&file=" + this.props.file;
        }

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        document.head.appendChild(script);
    }

    gistSrcSet(gist) {
        this.setState({
            loading: false,
            src: gist.div
        });
        this.addStylesheet(gist.stylesheet);
    }

    render() {
        return (<div className="BlinkGist-container Blink">
            {
                this.state.loading ? (
                    <div className="BlinkGist-loading-container">
                        <div className="BlinkGist-loading-indicator">
                            <BlinkSpinner pushEvent={{eventCount: 0}}/>
                        </div>
                    </div>
                ) : (
                    <div dangerouslySetInnerHTML={{__html: this.state.src}}/>
                )
            }
        </div>)
    }
}

BlinkGist.propTypes = {
    gist: PropTypes.string.isRequired, // e.g. "username/id"
    file: PropTypes.string // to embed a single specific file from the gist
};

var gistCallbackID = 0;

BlinkGist.nextGistCallback = () => {
    return "embed_gist_callback_" + gistCallbackID++;
}

export default BlinkGist;
