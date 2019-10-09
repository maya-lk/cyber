import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';

import './featured-vendor.styles.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import API from '../../lib/api';

import Seller from '../seller/seller.component';

class FeaturedVendor extends React.Component {
    constructor(){
        super();

        this.state = {
            options: {
                loop:true,
                margin:30,
                nav:false,
                dots: false,
                autoplay:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                }
            },
            sellers : '',
            isMounted: false,
        }
    }

    componentDidMount(){
        const self = this;
        API.get('featured-sellers')
        .then(function(response){
            self.setState({ 
                sellers : response.data,
                isMounted: true
            });
        });
    }

    render(){
        const { sellers } = this.state;
        if (!this.state.isMounted) {
            return null;
        }
        return(
            <div className="sectionWrap" id="featuredVendorWrap">
                <div className="clipbg"/>
                <Container>
                    <h2>Featured Seller</h2>
                    <OwlCarousel 
                        id="featuredSeller"
                        className="featuredSelleerWrap"
                        {...this.state.options}
                    >
                        {
                            Object.values(sellers)
                                .map(({id , ...otherTermProps}) => (
                                    <Seller key={id} {...otherTermProps}/>
                                ))
                        }
                    </OwlCarousel>
                    <Link to="/sellers" className="btn loadMore">Load More</Link>
                </Container>
            </div>
        )
    }
}

export default FeaturedVendor;

//<Seller key={id} {...otherTermProps}/>