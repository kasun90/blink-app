import React from 'react';
import WithNetwork from './../network/WithNetwork';
import './Presets.css';
import './../../common/Colors.css';
import './../../App.css';
import PresetElement from './PresetElement';
import BlinkButton from '../blinkbutton/BlinkButton';

class Presets extends WithNetwork {

    limit = 10;
    timestamp = 0;

    constructor(props) {
        super(props);
        this.onShowMore = this.onShowMore.bind(this);
        this.state = {
            presets: [],
            hasMore: false
        }
    }

    componentDidMount() {
        window.scroll(0,0);
        this.requestPresets(this.timestamp, true, this.limit);
    }

    requestPresets(timestamp, less, limit) {
        var req = WithNetwork.buildMessage('com.blink.shared.client.preset.PresetsRequestMessage');
        req.timestamp = timestamp;
        req.less = less;
        req.limit = limit;

        this.send(req, (response, error) => {
            if (error === undefined) {
                const _presets = Array.from(response.presets);
                this.setState({
                    presets: this.state.presets.concat(_presets.map((value) => {
                        if (this.timestamp === 0 || this.timestamp > value.timestamp) {
                            this.timestamp = value.timestamp;
                        }
                        return <PresetElement key={value.timestamp} data={value}/>
                    })),
                    hasMore: _presets.length === this.limit
                });
            }
        });
    }

    onShowMore() {
        this.requestPresets(this.timestamp, true, this.limit);
    }

    render() {
        return(<div className={`Common-container Blink`}>
            <div className="Common-title">Presets</div>
            <div className="Common-seperator"/>
            <div>
                <i>Hover or drag on the image to move the slider</i>
            </div>
            <a style={{marginTop: '1em', color: 'inherit'}} href="/articles/how-to-install-custom-presets-on-lightroom">
                <strong>How to install presets</strong>
            </a>
            <div className="Preset-container">
                {this.state.presets}
            </div>
            {this.state.hasMore && <BlinkButton className="Preset-show-more" onClick={this.onShowMore}>Show More</BlinkButton>}
        </div>);
    }
}

export default Presets;