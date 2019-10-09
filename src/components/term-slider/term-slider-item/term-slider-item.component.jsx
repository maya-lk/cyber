import React from 'react';

import './term-slider-item.styles.scss';

const TermSliderItem = ({ id , imageUrl , imageAlt , name , sliderImageUrl , sliderImageAlt , sliderGitUrl }) => (
    <div className="termItem" id={id}>
        <div className="img">
            <img src={imageUrl} alt={imageAlt} />
        </div>
        <h5>{name}</h5>
        <div className="animation">
            <img className="animateImg" src={sliderImageUrl} alt={sliderImageAlt} data-animate={sliderGitUrl} />
        </div>
    </div>
);

export default TermSliderItem;