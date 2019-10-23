import React from 'react';
import loadable from '@loadable/component';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import './servicepage.styles.scss';

import API from '../../lib/api';

import TermPage from '../termPage/termPage.component';
import TermsOverview from '../../components/term-overview/term-overview.component';

import { setServicesListing , setServiceTerms } from '../../redux/services/services.actions';

const Footer = loadable(() => import('../../components/footer/footer.component'), {
    fallback: <div>Loading...</div>,
});

class ServicePage extends React.Component {

    componentDidMount(){
        const { setServicesListing , setServiceTerms } = this.props;

        API.get('vendors')
        .then(function(response){
            setServicesListing( response.data );
        });

        API.get('term-slider')
        .then(function(response){
            setServiceTerms(response.data);
        });

    }

    render() {
        const { match } = this.props;
        
        return (
            <div className="servicesPage">
                <Route exact path={`${match.path}`} component={TermsOverview} />
                <Route path={`${match.path}/:termId`} component={TermPage} />                
                <Footer/>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    setServicesListing : (services) => dispatch( setServicesListing(services) ),
    setServiceTerms : (services) => dispatch( setServiceTerms(services) )
});

export default connect(null , mapDispatchToProps)(ServicePage);