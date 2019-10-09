import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './seller.styles.scss';

const Seller = ({ id , imageUrl , title , rating , ratingCount , minPrice , maxPrice }) => (
    <div className="seller" id={id}>
        <div
            className="img"
            style={{
                backgroundImage : `url(${imageUrl})`
            }}
        />
        <div className="titleWrap">
            <h3 dangerouslySetInnerHTML={{__html: title}}/>
            <Badge pill variant="">
                <FontAwesomeIcon icon={faStar} />
                <span>{rating}</span>
                ({ratingCount})
            </Badge>
        </div>
        <div className="price">රු {minPrice} - රු {maxPrice}</div>
    </div>
);

export default Seller;