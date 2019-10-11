import React from 'react';
import loadable from '@loadable/component';

import './aboutpage.styles.scss';

import PhoneImage1 from '../../assets/images/about-phone-1.png';
import PhoneImage2 from '../../assets/images/about-phone-2.png';
import PhoneImage1Shadow from '../../assets/images/about-phone-1-shadow.png';
import PhoneImage2Shadow from '../../assets/images/about-phone-2-shadow.png';

const Footer = loadable(() => import('../../components/footer/footer.component'), {
    fallback: <div>Loading...</div>,
});

document.body.classList.add('about-body');

export class AboutPage extends React.Component {
    constructor(){
        super();

        this.state = {
            imageOneShow: false,
            imageTwoShow: false,
            imageOneAnim: false,
            imageTwoAnim: false
        }
    }

    componentDidMount(){
        setTimeout(
            function() {
                this.setState({imageOneShow: true});
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
                <Footer/>
            </div>
        )
    }
}

export default AboutPage;