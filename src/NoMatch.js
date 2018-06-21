import React, { Component } from 'react';
import './App.css';
import './common/Colors.css'

class NoMatch extends Component {
    render() {
        return(<div className={`No-match-container Blink`}>
            <div>404<br/>Nothing to see here</div>
        </div>);
    }
}

export default NoMatch;