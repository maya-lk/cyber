import React from 'react';

import './vendor-category.styles.scss';

import API from '../../../lib/api';

import Term from '../../term/term.component';

class VendorCategory extends React.Component{
    constructor(){
        super();

        this.state = {
            terms : ''
        }
    }

    componentDidMount(){
        const self = this;
        API.get('home')
        .then(function(response){
            self.setState({ 
                terms : response.data.featured_category
            });
        });
    }

    render(){
        const { terms } = this.state;
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
                            Object.values(terms)
                                .map(({id , ...otherTermProps}) => (
                                    <Term key={id} {...otherTermProps}/>
                                ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default VendorCategory;