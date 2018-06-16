import React, { Component } from 'react';
import './BlinkTextField.css';
import './../../common/Colors.css';

class BlinkTextField extends Component {

    constructor(props) {
        super(props);
        this.state = {focused: false}
    }

    componentDidMount() {

    }

    toggleFocus(value) {
        this.setState({
            focused: value
        });
    }

    render() {

        const inputClass = this.props.className !== undefined ? this.props.className : '';
        const extraCaptionClass = this.state.focused ? 'focus' : '';

        return(
            <div className={`Blink-text-container ${inputClass}`}>
                <label id="caption" className={`Blink-text-caption ${extraCaptionClass}`}>{this.props.placeholder}</label>
                <input onFocus={this.toggleFocus.bind(this, true)} onBlur={this.toggleFocus.bind(this, false)} className={`Blink-text-input Blink`} type={this.props.type} value={this.props.value} onChange={this.props.onChange} placeholder={this.props.placeholder}/>
                <div className="Bink-text-separator"/>
            </div>
        );
    }
}

export default BlinkTextField;

