//utils:
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// layout, pages, components and others:
import Top from './layout/Top';
import SearchResult from './pages/SearchResult';
import Product from './pages/Product';

createRoot(document.getElementById('root')).render(
    <Router>
      <StrictMode>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/resultado" element={<SearchResult />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </StrictMode>
    </Router>
)
