import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import LoadingScreen from './components/LoadingScreen';
import Nav           from './components/Nav';
import Footer        from './components/Footer';
import HomePage      from './pages/HomePage';
import AboutPage     from './pages/AboutPage';
import ServicesPage  from './pages/ServicesPage';
import BlogPage      from './pages/BlogPage';
import ContactPage   from './pages/ContactPage';

import './styles/global.css';

const AppInner: React.FC = () => {
  const [loading, setLoading]   = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const location                = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  }, [location.pathname]);

  const handleLoadDone = useCallback(() => setLoading(false), []);

  return (
    <>
      {loading && <LoadingScreen onDone={handleLoadDone} />}
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Routes>
          <Route path="/"         element={<HomePage />} />
          <Route path="/about"    element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog"     element={<BlogPage />} />
          <Route path="/contact"  element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

const App: React.FC = () => (
    <AppInner />
);

export default App;