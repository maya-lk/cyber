import React from 'react';
import loadable from '@loadable/component';

import './home.styles.scss';

const MainBanner = loadable(() => import('../../components/main-banner/main-banner.component'), {
    fallback: <div>Loading...</div>,
});
const FeaturedVendor = loadable(() => import('../../components/featured-vendor/featured-vendor.component'), {
    fallback: <div>Loading...</div>,
});
const TermSlider = loadable(() => import('../../components/term-slider/term-slider.component'), {
    fallback: <div>Loading...</div>,
});
const Services = loadable(() => import('../../components/services/services.component'), {
    fallback: <div>Loading...</div>,
});
const Download = loadable(() => import('../../components/download/download.component'), {
    fallback: <div>Loading...</div>,
});
const Clients = loadable(() => import('../../components/clients/clients.component'), {
    fallback: <div>Loading...</div>,
});

const Footer = loadable(() => import('../../components/footer/footer.component'), {
    fallback: <div>Loading...</div>,
});

document.body.classList.add('home-body');

const HomePage = () => (
    <div className="homepage">
        <MainBanner/>
        <FeaturedVendor />
        <TermSlider />
        <Services/>
        <Download/>
        <Clients/>
        <Footer/>
    </div>
);

export default HomePage;