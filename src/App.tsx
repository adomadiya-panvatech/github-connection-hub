
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from './components/ui/toaster';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Dashboard from './components/Dashboard/Dashboard';
import CMSLayout from './components/Layout/CMSLayout';
import ContentLibrary from './pages/ContentLibrary';
import ContentCollections from './pages/ContentCollections';
import Taxonomy from './pages/Taxonomy';
import MediaLibrary from './pages/MediaLibrary';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* CMS Routes */}
            <Route path="/cms/content-library" element={
              <CMSLayout>
                <ContentLibrary />
              </CMSLayout>
            } />
            <Route path="/cms/content-collections" element={
              <CMSLayout>
                <ContentCollections />
              </CMSLayout>
            } />
            <Route path="/cms/taxonomy" element={
              <CMSLayout>
                <Taxonomy />
              </CMSLayout>
            } />
            <Route path="/cms/media-library" element={
              <CMSLayout>
                <MediaLibrary />
              </CMSLayout>
            } />
            
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
