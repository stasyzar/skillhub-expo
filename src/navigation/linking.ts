import * as Linking from 'expo-linking';
import type { LinkingOptions } from '@react-navigation/native';
import type { RootStackParamList } from '@interfaces/types';

const prefix = Linking.createURL('/');

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [prefix, 'skillhub://'],
  config: {
    screens: {
      Login: 'login',
      MainTabs: {
        screens: {
          Courses: 'courses',
          Profile: 'profile',
        },
      },
      CourseDetails: 'course/:courseId',
    },
  },
};