import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './featured-vendor.styles.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import API from '../../lib/api';

import Seller from '../seller/seller.component';
import { setFeaturedSellers } from '../../redux/home/home.actions';
import { selectFeaturedSeller } from '../../redux/home/home.selector';

const BaseURL = ( process.env.NODE_ENV === 'development' ) ? '/' : `${process.env.PUBLIC_URL}/` ;

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
            }
        }
    }

    componentDidMount(){
        const { setFeaturedSellers } = this.props;

        API.get('featured-sellers')
        .then(function(response){
            setFeaturedSellers( response.data );
        });
    }

    render(){
        const { sellers } = this.props;
        if (!sellers) {
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
                            ( sellers ) ?
                                Object.values(sellers)
                                    .map(({id , ...otherTermProps}) => (
                                        <Seller key={id} {...otherTermProps}/>
                                    ))
                            : ''
                        }
                    </OwlCarousel>
                    <Link to={`${BaseURL}sellers`} className="btn loadMore">Load More</Link>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    sellers : selectFeaturedSeller
});

const mapDispachToProps = dispach => ({
    setFeaturedSellers : (sellers) => dispach( setFeaturedSellers(sellers) )
});

export default connect(mapStateToProps , mapDispachToProps)(FeaturedVendor);