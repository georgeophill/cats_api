import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home} from './pages/Home';
import {Favourites} from './pages/Favourites';
import {Navbar} from './components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
