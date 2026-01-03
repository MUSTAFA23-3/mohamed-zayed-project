
import React, { useState } from 'react';
import { Course } from '../types';
import { TEACHER_INFO } from '../constants';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const [showPayment, setShowPayment] = useState(false);
  const [showVodafoneInfo, setShowVodafoneInfo] = useState(false);

  const handleWhatsAppPayment = () => {
    const message = `مرحباً أستاذ محمد، أريد شراء كود تفعيل لدورة (${course.title})`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${TEACHER_INFO.whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleClosePayment = () => {
    setShowPayment(false);
    setShowVodafoneInfo(false);
  };

  return (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 card-hover group flex flex-col relative">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={course.imageUrl} 
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80"></div>
      </div>
      
      <div className="p-8 relative -mt-10 bg-white rounded-t-[2.5rem] flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-bold text-gray-900 leading-tight">{course.title}</h3>
          <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 flex-shrink-0">
            {course.icon}
          </div>
        </div>
        
        <p className="text-gray-600 text-base leading-relaxed mb-6 h-20 overflow-hidden">
          {course.description}
        </p>
        
        <div className="flex items-center text-gray-400 text-sm font-medium mb-8">
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          محتوى شامل ومحدث 2026
        </div>

        <div className="mt-auto">
          {!showPayment ? (
            <button 
              onClick={() => setShowPayment(true)}
              className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition duration-300 shadow-md flex items-center justify-center gap-2 group-hover:shadow-blue-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              شراء الآن
            </button>
          ) : (
            <div className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-blue-700">
                  {showVodafoneInfo ? 'تعليمات التحويل:' : 'اختر طريقة الدفع:'}
                </span>
                <button 
                  onClick={handleClosePayment}
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {showVodafoneInfo ? (
                <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-100 text-center space-y-3 animate-in zoom-in duration-300">
                  <p className="text-red-600 font-black text-xl">حول 200ج على</p>
                  <div className="bg-white py-2 px-4 rounded-xl border border-red-200 inline-block">
                    <span className="text-2xl font-black text-gray-900 select-all tracking-wider">
                      {TEACHER_INFO.vodafoneNumber}
                    </span>
                  </div>
                  <p className="text-xs text-red-500 font-bold">ثم أرسل صورة التحويل للمعلم لتفعيل الحساب</p>
                  <button 
                    onClick={() => setShowVodafoneInfo(false)}
                    className="text-gray-400 text-xs font-bold hover:underline"
                  >
                    رجوع لطرق الدفع
                  </button>
                </div>
              ) : (
                <>
                  <button 
                    onClick={handleWhatsAppPayment}
                    className="w-full py-3 bg-green-50 text-green-700 border-2 border-green-100 rounded-xl font-bold hover:bg-green-100 transition flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.554 4.189 1.602 6.006L0 24l6.135-1.61a11.83 11.83 0 005.912 1.569h.005c6.636 0 12.032-5.396 12.035-12.031a11.763 11.763 0 00-3.517-8.513"/>
                    </svg>
                    الشراء بكود (واتساب)
                  </button>
                  <button 
                    onClick={() => setShowVodafoneInfo(true)}
                    className="w-full py-3 bg-red-50 text-red-700 border-2 border-red-100 rounded-xl font-bold hover:bg-red-100 transition flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    فودافون كاش
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
