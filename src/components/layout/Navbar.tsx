import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Briefcase as BriefcaseBusiness, Search, Menu, X, LogIn, UserCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };
  
  const getDashboardLink = () => {
    if (!user) return '/login';
    return user.role === 'employer' ? '/employer/dashboard' : '/candidate/dashboard';
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <BriefcaseBusiness size={32} className="h-8 w-auto text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">TalentTrack</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-blue-500 hover:text-gray-900">
                Home
              </Link>
              <Link to="/jobs" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-blue-500 hover:text-gray-900">
                Jobs
              </Link>
              <Link to="/companies" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-blue-500 hover:text-gray-900">
                Companies
              </Link>
              <Link to="/about" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-blue-500 hover:text-gray-900">
                About
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <Link to="/jobs" className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">
              <Search className="h-5 w-5 mr-1" />
              <span>Search</span>
            </Link>
            {user ? (
              <div className="relative ml-3">
                <div className="flex items-center space-x-3">
                  <Link to={getDashboardLink()} className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-900">
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login" className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">
                  <LogIn className="h-5 w-5 mr-1" />
                  <span>Login</span>
                </Link>
                <Link to="/register" className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                  Register
                </Link>
              </div>
            )}
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link 
            to="/" 
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-blue-500 hover:text-gray-900"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/jobs" 
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-blue-500 hover:text-gray-900"
            onClick={() => setIsMenuOpen(false)}
          >
            Jobs
          </Link>
          <Link 
            to="/companies" 
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-blue-500 hover:text-gray-900"
            onClick={() => setIsMenuOpen(false)}
          >
            Companies
          </Link>
          <Link 
            to="/about" 
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-blue-500 hover:text-gray-900"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          {user ? (
            <div className="space-y-1">
              <Link
                to={getDashboardLink()}
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-blue-500 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-blue-500 hover:text-gray-900"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="space-y-1">
              <Link
                to="/login"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-blue-500 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-blue-500 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;