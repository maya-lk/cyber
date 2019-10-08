import React from 'react';
import Container from 'react-bootstrap/Container';

import './footer.styles.scss';

import CreatorLogo from '../../assets/images/maya-logo.png';

import FooterAddress from '../footer-address/footer-address.component';
import FooterMenu from './footer-menu/footer-menu.component';
import FooterApp from '../footer-app/footer-app.component';
import FooterSocial from '../footer-social/footer-social.component';

const Footer = () => (
    <div className="footer">
        <div className="footerClip"></div>
        <div className="topWrapper">
            <Container className="d-flex justify-content-between flex-wrap">
                <div className="menuContactWrap d-flex flex-wrap">
                    <FooterAddress/>
                    <FooterMenu/>
                </div>
                <FooterApp />
            </Container>
        </div>
        <div className="bottomWrapper">
            <Container className="d-flex justify-content-between flex-wrap">
                <FooterSocial/>
                <div className="creatorWrap">
                    Website by
                    <img src={CreatorLogo} alt="Maya Creations (PVT) LTD" />
                </div>
            </Container>
        </div>
    </div>
);

export default Footer;