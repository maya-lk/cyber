import React from 'react';
import { withRouter } from 'react-router-dom';

import './term.styles.scss';

const Term = ({ term , history }) => {
    const { id , name , imageUrl , imageAlt , slug } = term;
    return(
        <div className="term" id={id} onClick={ () => history.push(`/services/${slug}`) }>
            <div className="img">
                <img src={imageUrl} alt={imageAlt}/>
            </div>
            <h5>{name}</h5>
        </div>
    )
};

export default withRouter(Term);