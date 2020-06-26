import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes/';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './routes/scroll'

const App: React.FC = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Header />
    <Routes />
    <Footer />
    <GlobalStyle />
  </BrowserRouter>
)

export default App;
