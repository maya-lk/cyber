import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF , faInstagram , faTwitter , faYoutube } from '@fortawesome/free-brands-svg-icons'

import './footer-social.styles.scss';

import API from '../../lib/api';

class FooterSocial extends React.Component {
    constructor(){
        super();

        this.state = {
            footerLogo : '',
            facebook: '',
            instagram: '',
            twitter: '',
            youtube: ''
        }
    }

    componentDidMount(){
        const self = this;
        API.get('theme-opions')
        .then(function(response){
            self.setState({ 
                footerLogo : response.data.site_logo,
                facebook : response.data.facebook,
                instagram : response.data.instagram,
                twitter : response.data.twitter,
                youtube : response.data.youtube
            });
        });
    }

    render(){
        return(
            <div className="socialWrap d-flex align-items-center">
                <img src={this.state.footerLogo} alt="Footer Logo" />
                <Nav className="socialMedia">
                    <Nav.Link href={this.state.facebook} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </Nav.Link>
                    <Nav.Link href={this.state.instagram} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </Nav.Link>
                    <Nav.Link href={this.state.twitter} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </Nav.Link>
                    <Nav.Link href={this.state.youtube} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube} />
                    </Nav.Link>
                </Nav>
            </div>
        )
    }
}

export default FooterSocial;