
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseCard from './components/CourseCard';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Auth from './components/Auth';
import { COURSES, TEACHER_INFO } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'dashboard' | 'auth'>('home');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // بيانات الإدارة
  const ADMIN_USERNAME = "Mohamed_Zayed";
  const ADMIN_PASSWORD = "Zayed_Biology_2024";

  // فحص الرابط للبحث عن الكود السري للدخول (#admin)
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#admin') {
        setShowLoginModal(true);
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAdminAuthenticated(true);
      setView('dashboard');
      setShowLoginModal(false);
      setError('');
      setUsername('');
      setPassword('');
      window.history.replaceState(null, '', window.location.pathname);
    } else {
      setError('بيانات الدخول غير صحيحة، يرجى المحاولة مرة أخرى.');
    }
  };

  const closeAdminModal = () => {
    setShowLoginModal(false);
    window.history.replaceState(null, '', window.location.pathname);
    setUsername('');
    setPassword('');
    setError('');
  };

  if (view === 'dashboard' && isAdminAuthenticated) {
    return <Dashboard onBack={() => {
      setIsAdminAuthenticated(false);
      setView('home');
    }} />;
  }

  if (view === 'auth') {
    return <Auth onBack={() => setView('home')} />;
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar isDashboard={false} onLoginClick={() => setView('auth')} />
      
      <main>
        {/* Hero Section */}
        <Hero onJoinClick={() => setView('auth')} />

        {/* Courses Section */}
        <section id="courses" className="py-24 bg-white text-right">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">الدورات التعليمية المتاحة</h2>
              <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                محتوى علمي دقيق، رسوم توضيحية احترافية، وشرح يربط بين النظرية والتطبيق لتفهم وتستمتع بالمادة.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {COURSES.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Trust Section */}
        <section id="about" className="py-24 gradient-bg relative overflow-hidden text-right">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-bold mb-6">
                  لماذا نحن الخيار الأول؟
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-8 leading-tight text-right">
                  منصة {TEACHER_INFO.name} <br /> 
                  <span className="text-blue-600">للتميز والاتقان</span>
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-blue-600">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">المنهج المتكامل</h4>
                      <p className="text-gray-600 text-lg leading-relaxed">تغطية شاملة لكل صغيرة وكبيرة في منهجي الأحياء والجيولوجيا بأسلوب يجمع بين الفهم والحفظ الذكي.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-blue-600">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">دعم طلاب الأزهر</h4>
                      <p className="text-gray-600 text-lg leading-relaxed">اهتمام خاص بطلاب الثانوية الأزهرية مع توضيح الفروق والتركيز على النقاط الهامة في امتحاناتهم.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 relative group">
                <div className="relative z-10 rounded-[3rem] bg-white p-12 shadow-2xl border-2 border-blue-50 flex flex-col items-center justify-center text-center space-y-6 min-h-[500px]">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <svg className="w-48 h-48 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                    </svg>
                  </div>
                  
                  <div className="relative">
                    <div className="text-[120px] font-black text-blue-600 leading-none drop-shadow-xl select-none">20</div>
                    <div className="text-3xl font-bold text-blue-900 -mt-4">عاماً من الخبرة</div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-3xl font-black text-gray-800 leading-relaxed px-4">
                      في تدريس <span className="text-blue-600">الأحياء والجيولوجيا</span>
                    </h3>
                    <div className="h-1 w-20 bg-blue-100 mx-auto rounded-full"></div>
                    <p className="text-2xl font-bold text-gray-600">
                      للثانوية العامة <br /> 
                      <span className="text-blue-500 font-black">والثانوية الأزهرية</span>
                    </p>
                  </div>

                  <div className="flex gap-4 pt-4 flex-wrap justify-center">
                    <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-xl font-bold text-sm shadow-sm">#جيل_التفوق</span>
                    <span className="px-4 py-2 bg-green-50 text-green-700 rounded-xl font-bold text-sm shadow-sm">#ثانوية_عامة_2026</span>
                    <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-xl font-bold text-sm shadow-sm">#من_أراد_استطاع</span>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 w-full h-full bg-blue-600 rounded-[3rem] -z-10 opacity-10 rotate-3 group-hover:rotate-6 transition duration-500"></div>
                <div className="absolute -bottom-6 -left-6 w-full h-full bg-blue-900 rounded-[3rem] -z-20 opacity-5 -rotate-3 group-hover:-rotate-6 transition duration-500"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Admin Login Modal */}
        {showLoginModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeAdminModal}></div>
            <div className="bg-white rounded-[2.5rem] p-10 max-w-md w-full relative z-10 shadow-2xl border border-gray-100 animate-in zoom-in duration-300">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 mx-auto mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900">منطقة الإدارة</h3>
                <p className="text-gray-500 mt-2 font-medium">الرجاء إدخال بيانات الاعتماد</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="relative">
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  <input 
                    type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="إسم المستخدم"
                    className="w-full pr-12 pl-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-blue-500 focus:outline-none transition font-bold"
                    autoFocus
                  />
                </div>
                <div className="relative">
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="كلمة المرور"
                    className="w-full pr-12 pl-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-blue-500 focus:outline-none transition font-bold"
                  />
                </div>
                
                {error && <p className="text-red-500 text-sm font-bold mt-2 text-center">{error}</p>}
                
                <button 
                  type="submit"
                  className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-100 mt-4"
                >
                  دخول لوحة التحكم
                </button>
                <button 
                  type="button"
                  onClick={closeAdminModal}
                  className="w-full py-2 text-gray-400 hover:text-gray-600 font-bold transition"
                >
                  إلغاء
                </button>
              </form>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
