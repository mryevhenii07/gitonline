import React from 'react';
import 'normalize.css';

import './App.css';
import AppBar from './components/AppBar/AppBar';

const App = () => {
  return (
    <div>
      <div style={{ width: 1200, margin: ' 0 auto' }}>
        <AppBar />
      </div>
    </div>
  );
};

export default App;
