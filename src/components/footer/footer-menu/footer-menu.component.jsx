import React from 'react';
import Nav from 'react-bootstrap/Nav';

import './footer-menu.styles.scss';

const BaseURL = ( process.env.NODE_ENV === 'development' ) ? '/' : process.env.PUBLIC_URL ;

const FooterMenu = () => (
    <div className="menuWrap">
        <Nav className="footerQuickLinks">
            <Nav.Link href={`${BaseURL}`}>HOME</Nav.Link>
            <Nav.Link href={`${BaseURL}/terms`}>TERMS AND CONDITIONS</Nav.Link>
            <Nav.Link href={`${BaseURL}/about`}>ABOUT</Nav.Link>
            <Nav.Link href={`${BaseURL}/company-policy`}>COMPANY POLICY</Nav.Link>
            <Nav.Link href={`${BaseURL}/services`}>SERVICES</Nav.Link>
            <Nav.Link href={`${BaseURL}/what-we-do`}>WHAT WE DO</Nav.Link>
            <Nav.Link href={`${BaseURL}/locations`}>LOCATIONS</Nav.Link>
            <Nav.Link href={`${BaseURL}/support`}>SUPPORT</Nav.Link>
        </Nav>
    </div>
);

export default FooterMenu;