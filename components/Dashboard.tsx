
import React, { useState } from 'react';
import { COURSES } from '../constants';
import { Video } from '../types';

interface DashboardProps {
  onBack: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'requests' | 'videos'>('requests');
  const [showAddModal, setShowAddModal] = useState(false);
  
  // بيانات تجريبية للفيديوهات
  const [videos, setVideos] = useState<Video[]>([
    { id: '1', courseId: 'support-movement', title: 'مقدمة في الدعامة في الإنسان', url: 'https://youtube.com/...', duration: '45:00', date: '2024-05-15' },
    { id: '2', courseId: 'geology', title: 'شرح صخور القشرة الأرضية', url: 'https://youtube.com/...', duration: '30:20', date: '2024-05-18' },
  ]);

  // نموذج الفيديو الجديد
  const [newVideo, setNewVideo] = useState({ title: '', courseId: COURSES[0].id, url: '', duration: '' });

  const handleAddVideo = (e: React.FormEvent) => {
    e.preventDefault();
    const videoToAdd: Video = {
      id: Math.random().toString(36).substr(2, 9),
      ...newVideo,
      date: new Date().toISOString().split('T')[0]
    };
    setVideos([videoToAdd, ...videos]);
    setShowAddModal(false);
    setNewVideo({ title: '', courseId: COURSES[0].id, url: '', duration: '' });
  };

  const handleDeleteVideo = (id: string) => {
    if(window.confirm('هل أنت متأكد من حذف هذا الفيديو؟')) {
      setVideos(videos.filter(v => v.id !== id));
    }
  };

  const requests = [
    { id: 1, student: "أحمد علي", course: "الدعامة والحركة", method: "فودافون كاش", date: "2024-05-20", status: "معلق" },
    { id: 2, student: "محمود حسن", course: "جيولوجيا", method: "كود تفعيل", date: "2024-05-19", status: "تم التفعيل" },
  ];

  const stats = [
    { label: "إجمالي الطلاب", value: "1,250", icon: "👥", color: "bg-blue-500" },
    { label: "فيديو مرفوع", value: videos.length.toString(), icon: "🎥", color: "bg-purple-500" },
    { label: "الدورات النشطة", value: COURSES.length.toString(), icon: "📚", color: "bg-green-500" },
    { label: "الأرباح الشهرية", value: "EGP 15,400", icon: "💰", color: "bg-indigo-500" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-800">لوحة التحكم للإدارة</h1>
            <p className="text-gray-500 mt-1">إدارة المحتوى والطلاب - أهلاً بك يا أستاذ محمد.</p>
          </div>
          <button 
            onClick={onBack}
            className="px-6 py-2 bg-white text-blue-600 border border-blue-200 rounded-xl font-bold hover:bg-blue-50 transition flex items-center gap-2 shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            العودة للموقع
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 bg-white p-2 rounded-2xl w-fit shadow-sm border border-gray-100">
          <button 
            onClick={() => setActiveTab('requests')}
            className={`px-8 py-3 rounded-xl font-bold transition ${activeTab === 'requests' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            طلبات الطلاب
          </button>
          <button 
            onClick={() => setActiveTab('videos')}
            className={`px-8 py-3 rounded-xl font-bold transition ${activeTab === 'videos' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            إدارة الفيديوهات
          </button>
        </div>

        {/* Content */}
        {activeTab === 'requests' ? (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4">
                  <div className={`${stat.color} w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg`}>
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-bold">{stat.label}</p>
                    <p className="text-2xl font-black text-gray-800">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Table */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">آخر طلبات الاشتراك</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-right">
                  <thead className="bg-gray-50 text-gray-500 text-sm uppercase font-bold">
                    <tr>
                      <th className="px-6 py-4">الطالب</th>
                      <th className="px-6 py-4">الدورة</th>
                      <th className="px-6 py-4">طريقة الدفع</th>
                      <th className="px-6 py-4">التاريخ</th>
                      <th className="px-6 py-4">الحالة</th>
                      <th className="px-6 py-4">الإجراء</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {requests.map((req) => (
                      <tr key={req.id} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 font-bold text-gray-700">{req.student}</td>
                        <td className="px-6 py-4 text-gray-600">{req.course}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${req.method === 'فودافون كاش' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                            {req.method}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-500 text-sm">{req.date}</td>
                        <td className="px-6 py-4">
                          <span className={`flex items-center gap-1 text-sm font-bold ${req.status === 'معلق' ? 'text-yellow-600' : 'text-green-600'}`}>
                            <span className={`w-2 h-2 rounded-full ${req.status === 'معلق' ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`}></span>
                            {req.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-blue-600 hover:text-blue-800 font-bold text-sm">تفعيل</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          <div className="animate-in fade-in duration-500">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-black text-gray-800">قائمة الدروس المرفوعة</h3>
              <button 
                onClick={() => setShowAddModal(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-700 transition shadow-lg shadow-blue-100"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                </svg>
                رفع فيديو جديد
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <div key={video.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-purple-50 text-purple-600 p-3 rounded-2xl group-hover:scale-110 transition">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 15.5l5.5-3.5L10 8.5v7zM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" />
                      </svg>
                    </div>
                    <button 
                      onClick={() => handleDeleteVideo(video.id)}
                      className="text-gray-300 hover:text-red-500 transition"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{video.title}</h4>
                  <p className="text-blue-600 text-sm font-bold mb-4">{COURSES.find(c => c.id === video.courseId)?.title}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-50 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {video.duration}
                    </span>
                    <span>{video.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add Video Modal */}
        {showAddModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowAddModal(false)}></div>
            <div className="bg-white rounded-[2.5rem] p-10 max-w-lg w-full relative z-10 shadow-2xl border border-gray-100 animate-in zoom-in duration-300">
              <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">إضافة فيديو تعليمي جديد</h3>
              <form onSubmit={handleAddVideo} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">عنوان الفيديو</label>
                  <input 
                    required
                    type="text" 
                    value={newVideo.title}
                    onChange={(e) => setNewVideo({...newVideo, title: e.target.value})}
                    placeholder="مثال: شرح الجهاز الهيكلي"
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-blue-500 focus:outline-none transition font-bold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">الدورة</label>
                  <select 
                    value={newVideo.courseId}
                    onChange={(e) => setNewVideo({...newVideo, courseId: e.target.value})}
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-blue-500 focus:outline-none transition font-bold"
                  >
                    {COURSES.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">رابط الفيديو</label>
                    <input 
                      required
                      type="url" 
                      value={newVideo.url}
                      onChange={(e) => setNewVideo({...newVideo, url: e.target.value})}
                      placeholder="YouTube Link"
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-blue-500 focus:outline-none transition font-bold text-left"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">المدة (دقيقة)</label>
                    <input 
                      required
                      type="text" 
                      value={newVideo.duration}
                      onChange={(e) => setNewVideo({...newVideo, duration: e.target.value})}
                      placeholder="45:00"
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-blue-500 focus:outline-none transition font-bold text-left"
                    />
                  </div>
                </div>
                
                <div className="pt-4 flex gap-4">
                  <button 
                    type="submit"
                    className="flex-1 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-100"
                  >
                    إضافة الفيديو
                  </button>
                  <button 
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="flex-1 py-4 bg-gray-100 text-gray-500 rounded-2xl font-bold text-lg hover:bg-gray-200 transition"
                  >
                    إلغاء
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
