import React from 'react';
import Container from 'react-bootstrap/Container';

import './services.styles.scss';

import API from '../../lib/api';

import ServiceItem from './service-item/service-item.component';

class Services extends React.Component {
    constructor(){
        super();

        this.state = {
            services1 : '',
            services2 : '',
            serviceImage : ''
        }
    }

    componentDidMount(){
        const self = this;
        API.get('home')
        .then(function(response){
            self.setState({ 
                services1 : response.data.services1,
                services2 : response.data.services2,
                serviceImage : response.data.serviceImageUrl
            });
        });
    }

    render(){
        const { services1 , services2 , serviceImage } = this.state;
        return(
            <div className="sectionWrap" id="servicesWrap">
                <Container className="d-flex justify-content-between flex-wrap">
                    <div className="services leftServices">
                        {
                            Object.values(services1)
                                .map((service , idx) => (
                                    <ServiceItem 
                                        key={idx}
                                        imageObj={service.image}
                                        title={service.title}
                                        description={service.description} 
                                    />
                                ))
                        }
                    </div>
                    <div className="middleImage">
                        <img src={serviceImage} alt="Services" />
                    </div>
                    <div className="services rightServices">
                        {
                            Object.values(services2)
                                .map((service , idx) => (
                                    <ServiceItem 
                                        key={idx}
                                        imageObj={service.image}
                                        title={service.title}
                                        description={service.description} 
                                    />
                                ))
                        }
                    </div>
                </Container>
            </div>
        )
    }
}

export default Services;