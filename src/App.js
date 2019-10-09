import React from 'react';
import { Switch , Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/homepage/home.components';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

const BaseURL = ( process.env.NODE_ENV === 'development' ) ? '/' : process.env.PUBLIC_URL ;

export const history = createBrowserHistory({
  basename: BaseURL
});

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path={`${BaseURL}`} component={HomePage} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;