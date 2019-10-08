import React from 'react';
import ReactPlayer from 'react-player'

import './video.styles.scss';

import API from '../../../lib/api';

import PhoneBG from '../../../assets/images/phone-bg.png';

class Video extends React.Component {
    constructor(){
        super();

        this.state = {
            videoUrl : '',
            animated: ''
        }
    }

    componentDidMount(){
        const self = this;
        API.get('home')
        .then(function(response){
            self.setState({ 
                videoUrl : response.data.main_video
            });
        }); 
        
    }

    videoOnReady = () => {
        setTimeout(function(){
            this.setState({ animated : 'animated' });
        }.bind(this), 1500);
    }

    render(){
        return(
            <div className={`${this.state.animated} animWrap`}>
                <span
                    style={{ backgroundImage : `url(${PhoneBG})` }} 
                    className="videoBg"
                />
                <div className="videoWrap">
                    <ReactPlayer 
                        url={this.state.videoUrl}
                        playing
                        loop
                        playsinline
                        width="492"
                        height="1100"
                        muted
                        onReady={this.videoOnReady}
                    />
                </div>
            </div>
        )
    }
}

export default Video;