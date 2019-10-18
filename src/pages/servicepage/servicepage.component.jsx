import React from 'react';
import loadable from '@loadable/component';

import './servicepage.styles.scss';

const Footer = loadable(() => import('../../components/footer/footer.component'), {
    fallback: <div>Loading...</div>,
});

class ServicePage extends React.Component {

    constructor(){
        super();

        this.state = {
        }
    }

    render() {
        return (
            <div className="servicesPage">
                Services
                <Footer/>
            </div>
        )
    }

}

export default ServicePage;