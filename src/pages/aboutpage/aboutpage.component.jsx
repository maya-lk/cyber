import React from 'react';
import loadable from '@loadable/component';
import Container from 'react-bootstrap/Container';

import './aboutpage.styles.scss';

import PhoneImage1 from '../../assets/images/about-phone-1.png';
import PhoneImage2 from '../../assets/images/about-phone-2.png';
import PhoneImage1Shadow from '../../assets/images/about-phone-1-shadow.png';
import PhoneImage2Shadow from '../../assets/images/about-phone-2-shadow.png';
import AppPhone from '../../assets/images/about-app-phone-2.png';
import Icon1 from '../../assets/images/icon-1.png';
import Icon2 from '../../assets/images/icon-2.png';
import Icon3 from '../../assets/images/icon-3.png';
import Icon4 from '../../assets/images/icon-4.png';

const Footer = loadable(() => import('../../components/footer/footer.component'), {
    fallback: <div>Loading...</div>,
});

document.body.classList.add('about-body');

class AboutPage extends React.Component {

    constructor(){
        super();

        this.state = {
            imageOneShow: false,
            imageTwoShow: false,
            imageOneAnim: false,
            imageTwoAnim: false,
            smallImageAnim : false
        }
    }

    componentDidMount(){
        setTimeout(
            function() {
                this.setState({
                    imageOneShow: true,
                    smallImageAnim: true
                });
            }
            .bind(this),
            500
        );

        setTimeout(
            function() {
                this.setState({imageTwoShow: true});
            }
            .bind(this),
            1000
        );

        setTimeout(
            function() {
                this.setState({
                    imageOneAnim: true,
                    imageTwoAnim: true
                });
            }
            .bind(this),
            2500
        );

        
    }

    render() {
        return (
            <div className="aboutpage">
                <div className="aboutBannerWrap">
                    <div className={`${ this.state.imageOneShow ? 'showImage' : '' } phoneImg1`}>
                        <img 
                            src={PhoneImage1} 
                            alt="phone"
                            className={`${ this.state.imageOneAnim ? 'animationBounce' : '' }`}                            
                        />
                        <span 
                            className={`${ this.state.imageTwoAnim ? 'showShadow' : '' } shadow`}
                            style={{ backgroundImage : `url(${PhoneImage1Shadow})` }}
                        />
                    </div>
                    <div className={`${ this.state.imageTwoShow ? 'showImage' : '' } phoneImg2`}>
                        <img 
                            src={PhoneImage2} 
                            alt="phone"
                            className={`${ this.state.imageOneAnim ? 'animationBounce' : '' }`}           
                        />
                        <span 
                            className={`${ this.state.imageTwoAnim ? 'showShadow' : '' } shadow`}
                            style={{ backgroundImage : `url(${PhoneImage2Shadow})` }}
                        />
                    </div>
                    <h1>CYBER</h1>
                    <h3>REDIFINING THE WAY OF LIFE</h3>
                </div>
                <div className="appFeatureWrap">
                    <div className="clipbg"/>
                    <Container>
                        <h2 className="text-center">We have fit <br/>every service in to <span>1</span> app</h2>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis</p>
                        <div className="appFeatures d-flex justify-content-center">
                            <div className="iconWrap leftIcons">
                                <img className={`${ this.state.smallImageAnim ? 'animateSmall' : '' } icon1`} src={Icon1} alt="icon 1" />
                                <img className={`${ this.state.smallImageAnim ? 'animateSmall' : '' } icon3`} src={Icon3} alt="icon 3" />                               
                            </div>
                            <div className="appPhone">
                                <img src={AppPhone} alt="Phone App" />
                            </div>
                            <div className="iconWrap rightIcons">
                                <img className={`${ this.state.smallImageAnim ? 'animateSmall' : '' } icon2`} src={Icon2} alt="icon 2" />
                                <img className={`${ this.state.smallImageAnim ? 'animateSmall' : '' } icon4`} src={Icon4} alt="icon 4" />
                            </div>
                        </div>
                    </Container>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default AboutPage;