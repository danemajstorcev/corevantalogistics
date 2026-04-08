import React, { useState, useEffect, useCallback } from 'react';
import type { PageName } from './types';

import LoadingScreen from './components/LoadingScreen';
import Nav           from './components/Nav';
import Footer        from './components/Footer';
import HomePage      from './pages/HomePage';
import AboutPage     from './pages/AboutPage';
import ServicesPage  from './pages/ServicesPage';
import BlogPage      from './pages/BlogPage';
import ContactPage   from './pages/ContactPage';

import './styles/global.css';

const App: React.FC = () => {
  const [loading, setLoading]   = useState(true);
  const [page, setPage]         = useState<PageName>('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  }, [page]);

  const handleLoadDone = useCallback(() => setLoading(false), []);

  const renderPage = () => {
    switch (page) {
      case 'home':     return <HomePage setPage={setPage} />;
      case 'about':    return <AboutPage />;
      case 'services': return <ServicesPage setPage={setPage} />;
      case 'blog':     return <BlogPage />;
      case 'contact':  return <ContactPage />;
    }
  };

  return (
    <>
      {loading && <LoadingScreen onDone={handleLoadDone} />}
      <Nav page={page} setPage={setPage} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>{renderPage()}</main>
      <Footer setPage={setPage} />
    </>
  );
};

export default App;
