import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Article from './pages/Article';
import Database from './pages/Database';
import ParishDetail from './pages/ParishDetail';
import EvidenceFeed from './pages/EvidenceFeed';
import ScrollToTop from './components/ScrollToTop'; // Needs simple component

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Article />} />
          <Route path="/baza" element={<Database />} />
          <Route path="/zupnija/:id" element={<ParishDetail />} />
          <Route path="/vsi-dokazi" element={<EvidenceFeed />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;