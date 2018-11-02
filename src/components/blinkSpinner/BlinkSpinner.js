import React, { Component } from 'react';
import './BlinkSpinner.css';
import './../../common/Colors.css';

class BlinkSpinner extends Component {

    totalEvents = 100;
    currentEvent = 0;

    constructor(props) {
        super(props);
        this.totalEvents = this.props.totalEvents;
        this.currentEvent = this.props.currentEvent || (this.props.pushEvent.currentEvent || 0);
        this.containerRef = React.createRef();
        this.spinnerRef = React.createRef();
        this.onResize = this.onResize.bind(this);
        this.setBorders = this.setBorders.bind(this);
        this.state = {
            percentageEnabled: this.props.percentageEnabled || false,
            percentage: 0,
            done: this.props.done || false
        }
        this.setPercentage();
    }

    componentDidMount() {
        if (this.containerRef.current) {
            this.containerRef.current.addEventListener('resize', this.onResize);
            this.setBorders();
        }
    }

    componentWillReceiveProps(nextProps, nextState) {
        if (nextProps.pushEvent) {
            this.currentEvent = nextProps.pushEvent.currentEvent || ++this.currentEvent;
            if (this.currentEvent > this.totalEvents) {
                this.currentEvent = this.totalEvents;
            }
            this.setPercentage();
        }

        if (nextProps.done) {
            this.setState({
                done: nextProps.done
            });
        }
    }

    onResize() {
        this.setBorders();
    }

    setBorders() {
        const containerWidth = this.containerRef.current.clientWidth;
        const borderWidth = containerWidth * 0.08;
        this.spinnerRef.current.style.borderWidth = borderWidth + 'px';
    }

    setPercentage() {
        this.setState({
            percentage: Math.round(this.currentEvent * 100 / this.totalEvents)
        });
    }

    render() {
        return(
            <div>
                {!this.state.done && 
                <div ref={this.containerRef} className="Blink-spinner-container">
                    <div className="Blink-spinner-sub-container">
                    <div ref={this.spinnerRef} className="Blink-spinner"></div>
                </div>
                {this.state.percentageEnabled && <p className="Blink-spinner-percentage Blink">
                    {this.state.percentage + '%'}
                </p>}
                </div>}
            </div>
        );
    }
}

export default BlinkSpinner;