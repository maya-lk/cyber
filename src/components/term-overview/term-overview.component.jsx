import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';

import Term from '../term/term.component';

import './term-overview.styles.scss';

const TermsOverview = ({ serviceTerms }) => (
    <div className="termOverviewWrap">
        <div className="termBanner">
            <h1>Vendor Category</h1>
        </div>
        <Container className="d-flex justify-content-between flex-wrap">
            {
                (serviceTerms !== null) ?
                serviceTerms.map((term) => (
                    <Term key={term.id} term={term}/>
                ))
                : ''
            }
        </Container>
    </div>
);

const mapStateToProps = ({ services }) => ({
    serviceTerms : services.serviceTerms
})

export default connect(mapStateToProps)(TermsOverview);