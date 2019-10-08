import React from 'react';

import './main-banner.styles.scss';

import MainBG from '../../assets/images/main-bg.jpg';

import Search from './search/search.component';
import VendorCategory from './vendor-category/vendor-category.component';
import Video from './video/video.component';

const MainBanner = () => (
    <div 
        className="sectionWrap" 
        id="mainBannerWrap"
        style={{ backgroundImage: `url(${MainBG})` }}
    >
        <div className="rotateClipPath"></div>
        <Search/>
        <VendorCategory/>
        <Video/>
    </div>
)

export default MainBanner;