import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Page2 } from './pages/Page2';
import { Page3 } from './pages/Page3';
import { Result } from './pages/Result';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home page="Home" />} />
          <Route path="page2" element={<Page2 page={' 2'} />} />
          <Route path="page3" element={<Page3 page={'Page 3'} />} />
          <Route path="result" element={<Result page={'Result'} />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
