import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import './header.styles.scss';

import API from '../../lib/api';

import Navigation from '../navigation/navigation.component';

class Header extends React.Component{
    constructor(){
        super();

        this.state = {
            siteLogo : ''
        }
    }

    componentDidMount(){
        const self = this;
        API.get('theme-opions')
        .then(function(response){
            self.setState({ siteLogo : response.data.site_logo });
        });
    }

    render(){
        return(
            <Navbar collapseOnSelect expand="md" className="mainNavWrap">
                <Navbar.Brand href="/">
                    <img src={this.state.siteLogo} alt="Cyber" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="mainNavi" />
                <Navbar.Collapse id="mainNavi">
                    <Navigation/>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;