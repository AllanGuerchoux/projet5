import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Survey from './pages/Survey'
import Nav from './components/Nav'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/components/Nav" element={<Nav />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)