import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import Interior from './pages/Interior';
import Construction from './pages/Construction';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/interior" element={<Interior />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/interior/project/:id" element={<ProjectDetail type="interior" />} />
        <Route path="/construction/project/:id" element={<ProjectDetail type="construction" />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
