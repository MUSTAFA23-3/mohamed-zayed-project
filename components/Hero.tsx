
import React from 'react';
import { TEACHER_INFO } from '../constants';

interface HeroProps {
  onJoinClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-32 lg:pb-40 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="z-10 w-full lg:max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-blue-900 leading-tight mb-8">
            منصة {TEACHER_INFO.name} <br /> 
            <span className="text-blue-600">لتعليم الأحياء والجيولوجيا</span>
            <br /> <span className="text-3xl sm:text-4xl lg:text-5xl">في {TEACHER_INFO.location}</span>
          </h1>
          
          <div className="bg-white/80 backdrop-blur-md p-6 sm:p-10 rounded-3xl shadow-xl border border-white/50 mb-10 max-w-2xl mx-auto">
            <p className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              مع خبرة <span className="text-blue-600 font-black">{TEACHER_INFO.experience} سنة</span> في تدريس الأحياء والجيولوجيا
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              نقدم لك أفضل الدورات التعليمية للثانوية العامة والأزهرية، بأساليب حديثة وشرح مبسط يضمن لك التفوق.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={onJoinClick}
              className="px-10 py-4 bg-blue-600 text-white rounded-2xl text-xl font-bold hover:bg-blue-700 transition duration-300 shadow-lg shadow-blue-200"
            >
              انضم الآن
            </button>
            <a 
              href={TEACHER_INFO.facebookUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-2xl text-xl font-bold hover:bg-blue-50 transition duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              تواصل على فيسبوك
            </a>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 -right-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-30"></div>
      </div>
    </section>
  );
};

export default Hero;
