import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes/';

import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
      <Routes />
    <Footer />
    <GlobalStyle/>
  </BrowserRouter>
)

export default App;
