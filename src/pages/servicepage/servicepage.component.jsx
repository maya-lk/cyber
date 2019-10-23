import React from 'react';
import loadable from '@loadable/component';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';

import './servicepage.styles.scss';

import API from '../../lib/api';

import Seller from '../../components/seller/seller.component';

import ServiceBannerImage from '../../assets/images/service-banner-image.png';
import { setServicesListing } from '../../redux/services/services.actions';

const Footer = loadable(() => import('../../components/footer/footer.component'), {
    fallback: <div>Loading...</div>,
});

class ServicePage extends React.Component {

    componentDidMount(){
        const { setServicesListing } = this.props;

        API.get('vendors')
        .then(function(response){
            setServicesListing( response.data );
        });
    }

    render() {
        const { serviceListing } = this.props;
        return (
            <div className="servicesPage">
                <div className="servicesBannerWrap">
                    <Container className="d-flex">
                        <div className="textWrap">
                            <h1>Having Sudden cravings?</h1>
                            <h3>we got your back, we have <span>150+ Resturants</span> to select from</h3>
                            <span className="btn">SHOW ME THE FOOD</span>
                        </div>
                        <div className="imageWrap">
                            <img src={ServiceBannerImage} alt="Service Banner" />
                        </div>
                        <h2 className="bigText">FOOD</h2>
                    </Container>
                </div>
                <div className="servicesListingWrap">
                    <Container className="d-flex justify-content-between flex-wrap">
                        <div className="sidebar"></div>
                        <div className="servicesListing">
                            {
                                (serviceListing) ?
                                serviceListing.map(({id , ...otherServiceProps}) => (
                                    <Seller key={id} {...otherServiceProps}/>
                                ))
                                : ''
                            }
                        </div>
                    </Container>
                </div>
                <Footer/>
            </div>
        )
    }

}

const mapStateToProps = ({ services }) => ({
    serviceListing : services.serviceListing
});

const mapDispachToProps = dispach => ({
    setServicesListing : (services) => dispach( setServicesListing(services) )
});

export default connect(mapStateToProps , mapDispachToProps)(ServicePage);