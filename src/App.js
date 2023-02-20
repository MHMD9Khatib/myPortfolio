import React from 'react';

import { About, Footer, Header, Skils, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skils />
    <Testimonial />
    <Footer />
  </div>
);

export default App;