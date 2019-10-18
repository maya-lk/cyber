import React from 'react';
import { connect } from 'react-redux';

import './vendor-category.styles.scss';

import API from '../../../lib/api';

import Term from '../../term/term.component';
import { setVendorCategoryValues } from '../../../redux/vendor-category/vendor-category.actions';

class VendorCategory extends React.Component{

    componentDidMount(){
        const { setVendorCategoryValues } = this.props;

        API.get('home')
        .then(function(response){
            setVendorCategoryValues( response.data.featured_category );
        });
    }

    render(){
        const { vendorCategory } = this.props;
        return(
            <div className="clipPathWrap">
                <div className="clipPath"/>
                <div className="clipTextWrap">
                    <span className="text1">EVERY<br />SERIVCE</span>
                    <span className="text2">1</span>
                    <span className="text3">APP</span>
                    <span className="text4">REDIFINING THE WAY OF LIFE</span>
                </div>
                <div className="vendorCategory">
                    <h4>What are you looking for ?</h4>
                    <div className="termWrap d-flex justify-content-between flex-wrap">
                        {   
                            ( vendorCategory ) ?
                                Object.values(vendorCategory)
                                    .map(({id , ...otherTermProps}) => (
                                        <Term key={id} {...otherTermProps}/>
                                    ))
                            : ''
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ vendorCategory }) => ({
    vendorCategory : vendorCategory.vendorCategory
});

const mapDispachToProps = dispach => ({
    setVendorCategoryValues : (vendorCategory) => dispach( setVendorCategoryValues(vendorCategory) )
});

export default connect(mapStateToProps , mapDispachToProps)(VendorCategory);