import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Cursor from './components/Cursor';

const Projects = lazy(() => import('./components/Projects'));

function App() {
  return (
    <Router>
      <Cursor />
      <Suspense fallback={
        <div style={{
          height: "100vh", display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", background: "#060a14",
          color: "#94a3b8", fontFamily: "'Syne', sans-serif"
        }}>
          <div style={{ fontSize: "24px", marginBottom: "16px" }}>📂</div>
          <div>Loading Showcase...</div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
