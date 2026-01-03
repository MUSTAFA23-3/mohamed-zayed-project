
// Import React to fix "Cannot find namespace 'React'" error when using React.ReactNode
import React from 'react';

export interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
}

export interface Video {
  id: string;
  courseId: string;
  title: string;
  url: string;
  duration: string;
  date: string;
}

export interface TeacherInfo {
  name: string;
  experience: number;
  location: string;
  facebookUrl: string;
  whatsappNumber: string;
  vodafoneNumber: string;
}
