import React from 'react';
import { Route } from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';
import { createBrowserHistory } from 'history';
import loadable from '@loadable/component';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = loadable(() => import('./components/header/header.component'));
const HomePage = loadable(() => import('./pages/homepage/home.components'));
const SearchPage = loadable(() => import('./pages/searchpage/searchpage.component'));
const AboutPage = loadable(() => import('./pages/aboutpage/aboutpage.component'));
const ServicePage = loadable(() => import('./pages/servicepage/servicepage.component'));

const BaseURL = ( process.env.NODE_ENV === 'development' ) ? '/' : `${process.env.PUBLIC_URL}/` ;

export const history = createBrowserHistory({
  basename: BaseURL
});

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

function App() {
  return (
    <div>
      <Header/>
      <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="route-wrapper"
      >
        <Route exact path={`${BaseURL}`} component={HomePage} />
        <Route exact path={`${BaseURL}search`} component={SearchPage} />
        <Route exact path={`${BaseURL}search/:id`} component={SearchPage} />
        <Route exact path={`${BaseURL}about`} component={AboutPage} />
        <Route exact path={`${BaseURL}services`} component={ServicePage} />
      </AnimatedSwitch>
    </div>
  );
}

export default App;