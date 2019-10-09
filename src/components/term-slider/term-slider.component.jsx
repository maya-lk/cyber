import React from 'react';
import Slider from "react-slick";

import './term-slider.styles.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainBG from '../../assets/images/main-bg.jpg';

import API from '../../lib/api';

import TermSliderItem from './term-slider-item/term-slider-item.component';

class TermSlider extends React.Component {
    constructor(){
        super();

        this.state = {
            termSLider : '',
            isMounted : false
        }
    }

    componentDidMount(){
        const self = this;
        API.get('term-slider')
        .then(function(response){
            self.setState({ 
                termSLider : response.data,
                isMounted: true
            });
        });
    }

    render(){
        const { termSLider } = this.state;
        var settings = {
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToScroll: 1,
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToScroll: 1,
                        slidesToShow: 1
                    }
                }
            ]
        };
        if (!this.state.isMounted) {
            return null;
        }

        return(
            <div 
                className="sectionWrap"
                id="termSliderWrap"
                style={{
                    backgroundImage : `url(${MainBG})`
                }}
            >
                <Slider {...settings}>
                    {
                        Object.values(termSLider)
                            .map(({id , ...otherTermProps}) => (
                                <TermSliderItem key={id} {...otherTermProps}/>
                            ))
                    }
                </Slider>
            </div>
        )
    }
}

export default TermSlider;