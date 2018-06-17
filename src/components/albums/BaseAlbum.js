import { Component } from 'react';

class BaseAlbum extends Component {
    constructor(props) {
        super(props);
        this.albumsMap = new Map([["chandimals-birthday-bash", "Chandimal's Birthday Bash"],
        ["chitral-and-hasini", "Chitral and Hasini"],
        ["dineth-onela", "Dineth and Onela"],
        ["felicity", "Felicity"],
        ["panama", "Trip to Panama"],
        ["tharindu-and-subashini", "Tharindu and Subashini"]]);
    }
}

export default BaseAlbum;