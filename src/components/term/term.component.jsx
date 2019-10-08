import React from 'react';

import './term.styles.scss';

const Term = ({ id , name , imageUrl , imageAlt }) => (
    <div className="term" id={id}>
        <div className="img">
            <img src={imageUrl} alt={imageAlt}/>
        </div>
        <h5>{name}</h5>
    </div>
);

export default Term;