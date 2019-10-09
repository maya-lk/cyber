import React from 'react';
import Container from 'react-bootstrap/Container';

import './download.styles.scss';

import API from '../../lib/api';
import AppStore from '../../assets/images/appStore.png';
import GPlay from '../../assets/images/googleplay.png';
import Phone from '../../assets/images/phone.png';
import PhoneShadow from '../../assets/images/phone-shadow.png';

class Download extends React.Component {
    constructor(){
        super();

        this.state = {
            appStore : '',
            gPlay : ''
        }
    }

    componentDidMount(){
        const self = this;
        API.get('theme-opions')
        .then(function(response){
            self.setState({ 
                appStore : response.data.app_store,
                gPlay : response.data.google_play
            });
        });
    }

    render(){
        return(
            <div className="sectionWrap" id="downloadAppWrap">
                <div className="downloadClip"/>
                <Container className="d-flex justify-content-between flex-wrap">
                    <div className="phoneWrap">
                        <div className="phoneImg">
                            <img src={Phone} alt="flot phone" />
                        </div>
                        <span 
                            className="phoneShadow"
                            style={{
                                backgroundImage : `url(${PhoneShadow})`
                            }}
                        />
                    </div>
                    <div className="contentWrap">
                        <h3>DOWNLOAD<br/>CYBER APP</h3>
                        <p><strong>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean</strong></p>
                        <div className="appWrap">
                            <a href={this.state.appStore} target="_blank" rel="noopener noreferrer">
                                <img src={AppStore} alt="App Store" />
                            </a>
                            <a href={this.state.gPlay} target="_blank" rel="noopener noreferrer">
                                <img src={GPlay} alt="Google Play" />
                            </a>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Download;