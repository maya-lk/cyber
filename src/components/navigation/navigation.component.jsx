import React from 'react';
import Nav from 'react-bootstrap/Nav';

import './navigation.styles.scss';

const Navigation = () => (
    <Nav className="mainNavigation">
        <Nav.Link href="/">HOME</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/services">Services</Nav.Link>
        <Nav.Link href="/lcations">Locations</Nav.Link>
        <Nav.Link href="/become-a-vendor" className="becomeBtn">Become a Vendor</Nav.Link>
    </Nav>
);

export default Navigation;
