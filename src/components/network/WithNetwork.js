import { Component } from 'react';
import axios from 'axios';

class WithNetwork extends Component {
    constructor(props) {
        super(props);
        this.instance = axios.create({
            baseURL: process.env.REACT_APP_BACKEND_URL,
            timeout: 3000,
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 'X-App-Key' : process.env.REACT_APP_AUTH_KEY}
        });
    }

    static buildMessage(type) {
        return {'_type':type}
    }

    send(data, callback) {
        const params = new URLSearchParams();
        params.append('target', "CLIENT");
        params.append('message', JSON.stringify(data));
        this.instance.post('/client', params)
        .then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    }
}

export default WithNetwork;