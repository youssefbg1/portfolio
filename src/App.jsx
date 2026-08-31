import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';

import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';

import LoadingScreen from './components/ui/LoadingScreen.jsx';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router basename="/portfolio">
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route
                path="/projects/:slug"
                element={<ProjectDetail />}
              />
            </Routes>
          </main>

          <Footer />
        </>
      )}
    </Router>
  );
}