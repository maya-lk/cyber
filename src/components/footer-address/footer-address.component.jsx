import React from 'react';

import './footer-address.styles.scss';

import API from '../../lib/api';

class FooterAddress extends React.Component {
    constructor(){
        super();

        this.state = {
            address : '',
            telephone : ''
        }
    }

    componentDidMount(){
        const self = this;
        API.get('theme-opions')
        .then(function(response){
            self.setState({ 
                address : response.data.address,
                telephone : response.data.telephone  
            });
        });
    }

    render() {
        return(
            <div className="contactWrap">
                <h3>Contact Us</h3>
                <div className="address">{this.state.address}</div>
                <div className="tele">{this.state.telephone}</div>
            </div>
        )
    }
}

export default FooterAddress;