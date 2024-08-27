import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './Index';
import APropos from '../APropos';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/a_propos" element={<APropos/>} />
      </Routes>
    </Router>
  );
}

export default App;