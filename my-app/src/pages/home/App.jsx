import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './Index';
import APropos from '../APropos';
import Page404 from '../Page404';
import FicheLogement from '../FicheLogement';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Index />} />
        <Route path="/a_propos" element={<APropos />} />
        <Route path='/logement/:id' element={<FicheLogement />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;