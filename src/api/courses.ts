export interface Course {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
}

const MOCK_COURSES: Course[] = [
  { id: '1', title: 'React Native Fundamentals', level: 'Beginner', duration: '6h' },
  { id: '2', title: 'TypeScript for Mobile Devs', level: 'Intermediate', duration: '4h' },
  { id: '3', title: 'Redux Toolkit & Saga Mastery', level: 'Advanced', duration: '5h' },
  { id: '4', title: 'Expo & Native Modules', level: 'Intermediate', duration: '3.5h' },
  { id: '5', title: 'Animations with Reanimated', level: 'Advanced', duration: '4.5h' },
  { id: '6', title: 'UI & Styling with EStyleSheet', level: 'Beginner', duration: '2.5h' },
];

export const fetchCoursesApi = async (query: string): Promise<Course[]> => {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return MOCK_COURSES;
  }

  return MOCK_COURSES.filter((course) =>
    course.title.toLowerCase().includes(normalized),
  );
};