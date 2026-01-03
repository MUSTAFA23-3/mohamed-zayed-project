
import React, { useState } from 'react';
import { TEACHER_INFO } from '../constants';

interface NavbarProps {
  isDashboard: boolean;
  onLoginClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDashboard, onLoginClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (isDashboard) return null;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-800">منصة {TEACHER_INFO.name}</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-reverse space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">الرئيسية</a>
            <a href="#courses" className="text-gray-700 hover:text-blue-600 font-medium">الدورات</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">عن الأستاذ</a>
            
            <div className="flex items-center space-x-reverse space-x-4">
              <button 
                onClick={onLoginClick}
                className="text-blue-600 font-bold hover:text-blue-800 transition"
              >
                تسجيل الدخول
              </button>
              <a 
                href={TEACHER_INFO.facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300 shadow-sm"
              >
                تواصل معنا
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-1">
          <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">الرئيسية</a>
          <a href="#courses" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">الدورات</a>
          <button 
            onClick={onLoginClick}
            className="w-full text-right block px-3 py-2 text-blue-600 font-bold hover:bg-blue-50 rounded-md"
          >
            تسجيل الدخول
          </button>
          <a 
            href={TEACHER_INFO.facebookUrl}
            className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md"
            target="_blank" 
            rel="noopener noreferrer"
          >
            تواصل معنا
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
