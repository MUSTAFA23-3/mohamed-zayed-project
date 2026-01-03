
import React, { useState } from 'react';
import { TEACHER_INFO } from '../constants';

interface AuthProps {
  onBack: () => void;
}

const Auth: React.FC<AuthProps> = ({ onBack }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 text-right" dir="rtl">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <button 
            onClick={onBack}
            className="mb-8 text-blue-600 font-bold flex items-center gap-2 mx-auto hover:text-blue-800 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            العودة للرئيسية
          </button>
          <h2 className="text-3xl font-black text-blue-900">
            {isLogin ? 'تسجيل الدخول للمنصة' : 'إنشاء حساب طالب جديد'}
          </h2>
          <p className="mt-3 text-gray-600 font-medium">
            مرحباً بك في منصة {TEACHER_INFO.name} التعليمية
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-10 px-8 shadow-2xl rounded-[2.5rem] border border-gray-100 mx-4 sm:mx-0">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {!isLogin && (
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">الإسم الكامل</label>
                  <input 
                    type="text" 
                    placeholder="مثال: محمد أحمد"
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-blue-500 focus:outline-none transition font-bold"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">رقم الهاتف (أو البريد)</label>
                <input 
                  type="text" 
                  placeholder="01xxxxxxxxx"
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-blue-500 focus:outline-none transition font-bold"
                />
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">السنة الدراسية</label>
                  <select className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-blue-500 focus:outline-none transition font-bold">
                    <option>الصف الثالث الثانوي</option>
                    <option>الصف الثاني الثانوي</option>
                    <option>الصف الأول الثانوي</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">كلمة المرور</label>
                <input 
                  type="password" 
                  placeholder="********"
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-blue-500 focus:outline-none transition font-bold"
                />
              </div>

              <div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-100"
                >
                  {isLogin ? 'دخول الطالب' : 'إنشاء الحساب الآن'}
                </button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-600 font-bold hover:underline"
              >
                {isLogin ? 'ليس لديك حساب؟ سجل الآن مجاناً' : 'لديك حساب بالفعل؟ سجل دخولك'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
