import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Church } from 'lucide-react';

const Layout = ({ children }) => {
  const location = useLocation();
  
  const navLinkClass = (path) => 
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      location.pathname === path 
        ? 'bg-gray-100 text-church-red font-bold' 
        : 'text-gray-600 hover:text-black hover:bg-gray-50'
    }`;

  const redFilter = {
    filter: 'invert(16%) sepia(83%) saturate(2530%) hue-rotate(351deg) brightness(89%) contrast(102%)'
  };

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900 font-sans flex flex-col">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm flex-none">
        {/* Navbar is wide but has padding */}
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 max-w-[1920px] mx-auto">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <img 
                  src={`${import.meta.env.BASE_URL}assets/logo.png`} 
                  alt="Logo" 
                  className="h-10 w-10" 
                  style={redFilter}
                />
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold tracking-tighter uppercase leading-none text-church-red">Operacija Božje kraljestvo</h1>
                  <span className="text-xs text-gray-500 tracking-widest uppercase">Arhiv referendumske kampanje 2025</span>
                </div>
              </Link>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link to="/" className={navLinkClass('/')}>Domov</Link>
              <Link to="/zupnije" className={navLinkClass('/zupnije')}>Seznam župnij</Link>
              <Link to="/arhiv" className={navLinkClass('/arhiv')}>Arhiv primerov</Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Main container is full width, pages restrict themselves */}
      <main className="flex-grow w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;