import React from 'react';
import Nav from 'react-bootstrap/Nav';

import './footer-menu.styles.scss';

const FooterMenu = () => (
    <div className="menuWrap">
        <Nav className="footerQuickLinks">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/terms">TERMS AND CONDITIONS</Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <Nav.Link href="/company-policy">COMPANY POLICY</Nav.Link>
            <Nav.Link href="/services">SERVICES</Nav.Link>
            <Nav.Link href="/what-we-do">WHAT WE DO</Nav.Link>
            <Nav.Link href="/lcations">LOCATIONS</Nav.Link>
            <Nav.Link href="/support">SUPPORT</Nav.Link>
        </Nav>
    </div>
);

export default FooterMenu;