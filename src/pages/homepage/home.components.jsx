import React from 'react';

import './home.styles.scss';

import MainBanner from '../../components/main-banner/main-banner.component';
import FeaturedVendor from '../../components/featured-vendor/featured-vendor.component';

const HomePage = () => (
    <div className="homepage">
        <MainBanner/>
        <FeaturedVendor />
    </div>
);

export default HomePage;