import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminDashboard from './pages/admin/Dashboard';
import ArtisanDashboard from './pages/artisan/Dashboard';
import Collections from './pages/Collections';
import Artisans from './pages/Artisans';
import About from './pages/About';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { useAuthStore } from './store/authStore';
import './styles/global.css';
import Admin from './pages/Admin';

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/artisans" element={<Artisans />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
            
            <Route
              path="/admin/*"
              element={
                <ProtectedRoute
                  isAllowed={isAuthenticated && user?.role === 'admin'}
                  redirectPath="/login"
                >
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            
            <Route
              path="/artisan/*"
              element={
                <ProtectedRoute
                  isAllowed={isAuthenticated && user?.role === 'artisan'}
                  redirectPath="/login"
                >
                  <ArtisanDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;