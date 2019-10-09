import React from 'react';
import Container from 'react-bootstrap/Container';
import OwlCarousel from 'react-owl-carousel';

import './clients.styles.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import API from '../../lib/api';

class Clients extends React.Component {
    constructor(){
        super();

        this.state = {
            clients : '',
            options: {
                loop:true,
                margin:20,
                nav:false,
                dots: false,
                autoplay:true,
                responsive:{
                    0:{
                        items:2
                    },
                    600:{
                        items:4
                    },
                    1000:{
                        items:7
                    }
                }
            },            
            isMounted: false
        }
    }

    componentDidMount(){
        const self = this;
        API.get('home')
        .then(function(response){
            self.setState({ 
                clients : response.data.ourClients,
                isMounted: true
            });
        });
    }

    render(){
        const { clients } = this.state;
        if (!this.state.isMounted) {
            return null;
        }
        return(
            <div className="sectionWrap" id="ourClientWrap">
                <Container>
                    <OwlCarousel 
                        id="clientsSlider"
                        {...this.state.options}
                    >
                        {
                            Object.values(clients)
                                .map((client , idx) => (
                                    <div key={idx} className="item">
                                        <img src={client.image.url} alt={client.image.alt} />
                                    </div>
                                ))
                        }
                    </OwlCarousel>
                </Container>
            </div>
        )
    }
}

export default Clients;