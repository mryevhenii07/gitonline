import React from 'react';
import 'normalize.css';

import './App.css';
import AppBar from './components/AppBar/AppBar';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <div style={{ width: 1200, margin: ' 0 auto' }}>
        <AppBar />
        <Footer />
      </div>
    </div>
  );
};

export default App;
