//utils:
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// layout, pages, components and others:
import Top from './layout/Top';
import Footer from './layout/Footer';
import Home from './pages/Home';

createRoot(document.getElementById('root')).render(
    <Router>
      <StrictMode>
        <Top />
        <Home />
        <Footer />
      </StrictMode>
    </Router>
)
