import React from 'react';

import './home.styles.scss';

import MainBanner from '../../components/main-banner/main-banner.component';
import FeaturedVendor from '../../components/featured-vendor/featured-vendor.component';
import TermSlider from '../../components/term-slider/term-slider.component';

const HomePage = () => (
    <div className="homepage">
        <MainBanner/>
        <FeaturedVendor />
        <TermSlider />
    </div>
);

export default HomePage;