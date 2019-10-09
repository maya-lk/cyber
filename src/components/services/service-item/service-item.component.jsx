import React from 'react';

import './service-item.styles.scss';

const ServiceItem = ({ id , imageObj , title , description }) => (
    <div className="service" id={id}>
        <div className="img">
            <img src={imageObj.url} alt={imageObj.atl} />
        </div>
        <h4>{title}</h4>
        {description}
    </div>
);

export default ServiceItem;