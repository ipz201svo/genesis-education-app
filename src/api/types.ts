export type CourseBrief = {
  id: string;
  title: string;
  tags: string[];
  launchDate: string;
  status: string;
  description: string;
  duration: number;
  lessonsCount: number;
  containsLockedLessons: boolean;
  previewImageLink: string,
  rating: number,
  meta: {
    slug: string;
    skills: string[];
    courseVideoPreview: {
      link: string;
      duration: number;
      previewImageLink: string;
    };
  } | {
    slug: string;
    fullCourseProductId: string;
    fullCourseProductFamily: string;
  };
};

export type Course = {
  id: string;
  title: string;
  tags: string[];
  launchDate: string;
  status: string;
  description: string;
  duration: number;
  previewImageLink: string;
  rating: number;
  meta: {
    slug: string;
    skills: string[];
    courseVideoPreview: {
      link: string;
      duration: number;
      previewImageLink: string;
    };
  } | {
    slug: string;
    fullCourseProductId: string;
    fullCourseProductFamily: string;
  };
  lessons: Lesson[];
  containsLockedLessons: boolean;
};

export type Lesson = {
  id: string;
  title: string;
  duration: number;
  order: number;
  type: string;
  status: 'locked' | 'unlocked';
  link?: string;
  previewImageLink: string;
  meta: null;
};

export type AuthAnonimousResponse = {
  token: string;
};

export type AuthAnonimousResult = string;

export type GetCoursesResponse = {
  courses: CourseBrief[];
};

export type GetCoursesResult = {
  courses: CourseBrief[];
  totalCount: number;
};

export type GetCourseResponse = Course;

export type GetCourseResult = Course;
