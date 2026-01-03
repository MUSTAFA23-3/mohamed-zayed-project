
import React from 'react';
import { Course } from './types';

export const COURSES: Course[] = [
  {
    id: 'support-movement',
    title: 'الدعامة والحركة',
    description: 'شرح مفصل للجهاز الهيكلي والعضلي في الإنسان والنبات مع آليات الحركة.',
    imageUrl: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=800',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    id: 'hormones',
    title: 'التنسيق الهرموني',
    description: 'فهم عميق للغدد الصماء والهرمونات ودورها في تنظيم وظائف الجسم المختلفة.',
    imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.628.285a2 2 0 01-1.586 0l-.628-.285a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547l-.311.467a2 2 0 000 2.22l.311.467c.224.336.56.574.95.683l2.387.663a6 6 0 003.86-.517l.628-.285a2 2 0 011.586 0l.628.285a6 6 0 003.86.517l2.387-.663a2 2 0 00.95-.683l.311-.467a2 2 0 000-2.22l-.311-.467z" />
      </svg>
    )
  },
  {
    id: 'reproduction',
    title: 'التكاثر',
    description: 'دراسة تفصيلية لأنواع التكاثر والتطور الجنيني في الكائنات الحية المختلفة.',
    imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    id: 'immunity',
    title: 'المناعة',
    description: 'التعرف على الجهاز المناعي وآليات الدفاع عن الجسم ضد مسببات الأمراض.',
    imageUrl: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: 'dna-rna',
    title: 'DNA + RNA',
    description: 'دراسة الأحماض النووية والهندسة الوراثية والبيولوجيا الجزيئية المتقدمة.',
    imageUrl: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.628.285a2 2 0 01-1.586 0l-.628-.285a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547l-.311.467a2 2 0 000 2.22l.311.467c.224.336.56.574.95.683l2.387.663a6 6 0 003.86-.517l.628-.285a2 2 0 011.586 0l.628.285a6 6 0 003.86-.517l2.387-.663a2 2 0 00.95-.683l.311-.467a2 2 0 000-2.22l-.311-.467z" />
      </svg>
    )
  },
  {
    id: 'geology',
    title: 'جيولوجيا',
    description: 'استكشاف علوم الأرض والصخور والمعادن والظواهر الجيولوجية المذهلة.',
    imageUrl: 'https://images.unsplash.com/photo-1504194104404-433180773017?auto=format&fit=crop&q=80&w=800',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export const TEACHER_INFO = {
  name: 'أ. محمد زايد',
  experience: 20,
  location: 'مصر',
  facebookUrl: 'https://www.facebook.com/share/14TvrKoPeQV/',
  whatsappNumber: '201148766696',
  vodafoneNumber: '01000623768'
};
