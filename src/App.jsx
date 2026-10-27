import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import NotFound from './components/NotFound';

const Projects = lazy(() => import('./components/Projects'));

function App() {
  return (
    <Router>
      <Suspense fallback={
        <div style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B0D10",
          color: "#AAB2BD",
          fontFamily: "'Inter', sans-serif"
        }}>
          <div style={{ fontSize: "14px", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em", color: "#F27645" }}>
            LOADING...
          </div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
