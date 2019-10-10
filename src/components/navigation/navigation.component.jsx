import React from 'react';
import Nav from 'react-bootstrap/Nav';

import './navigation.styles.scss';

const BaseURL = ( process.env.NODE_ENV === 'development' ) ? '/' : `${process.env.PUBLIC_URL}/` ;

const Navigation = () => (
    <Nav className="mainNavigation">
        <Nav.Link href={`${BaseURL}`}>HOME</Nav.Link>
        <Nav.Link href={`${BaseURL}about`}>About</Nav.Link>
        <Nav.Link href={`${BaseURL}services`}>Services</Nav.Link>
        <Nav.Link href={`${BaseURL}locations`}>Locations</Nav.Link>
        <Nav.Link href={`${BaseURL}become-a-vendor`} className="becomeBtn">Become a Vendor</Nav.Link>
    </Nav>
);

export default Navigation;
