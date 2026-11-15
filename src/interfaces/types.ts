import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Courses: undefined;
  CourseDetails: { courseId: string };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;