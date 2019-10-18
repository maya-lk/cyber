import React from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';

import './video.styles.scss';

import API from '../../../lib/api';

import PhoneBG from '../../../assets/images/phone-bg.png';
import { setVideoUrl , setVideoAnimatedClass } from '../../../redux/home/home.actions';

class Video extends React.Component {
    constructor(){
        super();

        this.state = {
            videoUrl : '',
            animated: ''
        }
    }

    componentDidMount(){
        const { setVideoUrl } = this.props;

        API.get('home')
        .then(function(response){
            setVideoUrl( response.data.main_video );
        }); 
        
    }

    videoOnReady = () => {
        setTimeout(function(){
            this.props.setVideoAnimatedClass( 'animated' );
        }.bind(this), 1500);
    }

    render(){
        return(
            <div className={`${this.props.animated} animWrap`}>
                <span
                    style={{ backgroundImage : `url(${PhoneBG})` }} 
                    className="videoBg"
                />
                <div className="videoWrap">
                    <ReactPlayer 
                        url={this.props.videoUrl}
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

const mapStateToProps = ({ home : { videoUrl , animated } }) => ({
    videoUrl,
    animated
});

const mapDispachToProps = dispach => ({
    setVideoUrl : (videoUrl) => dispach( setVideoUrl(videoUrl) ),
    setVideoAnimatedClass : (animated) => dispach( setVideoAnimatedClass(animated) )
});

export default connect(mapStateToProps , mapDispachToProps)(Video);