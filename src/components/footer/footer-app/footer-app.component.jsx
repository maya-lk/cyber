import React from 'react';

import './footer-app.styles.scss';

import API from '../../../lib/api';
import AppStore from '../../../assets/images/app-store.png';
import GPlay from '../../../assets/images/g-play.png';

class FooterApp extends React.Component {
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
            <div className="appWrap">
                <a href={this.state.appStore} target="_blank" rel="noopener noreferrer">
                    <img src={AppStore} alt="App Store" />
                </a>
                <a href={this.state.gPlay} target="_blank" rel="noopener noreferrer">
                    <img src={GPlay} alt="Google Play" />
                </a>
            </div>
        )
    }
}

export default FooterApp;