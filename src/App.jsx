import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Index.jsx';
import Search from './Pages/Search/Search.jsx';
import Navbar from './components/Header.jsx';

const App = () => {
  return (
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </React.Fragment>

   
  );
};

export default App;