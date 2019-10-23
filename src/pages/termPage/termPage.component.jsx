import React from 'react';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';



import './termPage.styles.scss';

const TermPage = ({ match }) => {
    console.log(match);
    return(
        <div className="servicesTermsListing">
            <div className="servicesBannerWrap">
                <Container className="d-flex">
                    <div className="textWrap">
                        <h1>Having Sudden cravings?</h1>
                        <h3>we got your back, we have <span>150+ Resturants</span> to select from</h3>
                        <span className="btn">SHOW ME THE FOOD</span>
                    </div>
                    <div className="imageWrap">
                        {/* <img src={ServiceBannerImage} alt="Service Banner" /> */}
                    </div>
                    <h2 className="bigText">{match.params.termId.replace("-", " ")}</h2>
                </Container>
            </div>
            <div className="servicesListingWrap">
                <Container className="d-flex justify-content-between flex-wrap">
                    <div className="sidebar"></div>
                    <div className="servicesListing">
                        {
                            // (serviceListing) ?
                            // serviceListing.map(({id , ...otherServiceProps}) => (
                            //     <Seller key={id} {...otherServiceProps}/>
                            // ))
                            // : ''
                        }
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default connect()(TermPage);