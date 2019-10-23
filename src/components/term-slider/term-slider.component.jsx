import React from 'react';
import Slider from "react-slick";
import { connect } from 'react-redux';

import './term-slider.styles.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainBG from '../../assets/images/main-bg.jpg';

import API from '../../lib/api';

import TermSliderItem from './term-slider-item/term-slider-item.component';

import { setServiceTerms } from '../../redux/services/services.actions';

class TermSlider extends React.Component {

    componentDidMount(){
        const { setServiceTerms } = this.props;

        API.get('term-slider')
        .then(function(response){
            setServiceTerms(response.data);
        });
    }

    render(){
        const { serviceTerms } = this.props;        
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
        
        if (serviceTerms === null) {
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
                        serviceTerms.map((term) => (
                            <TermSliderItem key={term.id} term={term}/>
                        ))
                    }
                </Slider>
            </div>
        )
    }
}

const mapStateToProps = ({ services }) => ({
    serviceTerms : services.serviceTerms
})

const mapDispatchToProps = dispatch => ({
    setServiceTerms : (services) => dispatch(setServiceTerms(services))
});

export default connect(mapStateToProps , mapDispatchToProps)(TermSlider);