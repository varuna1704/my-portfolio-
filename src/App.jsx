import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
