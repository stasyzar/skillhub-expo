import Constants from 'expo-constants';

export const ENV = {
  API_URL: process.env.EXPO_PUBLIC_API_URL ?? '',
  APP_ENV: process.env.EXPO_PUBLIC_APP_ENV ?? 'development',
  APP_VERSION: Constants.expoConfig?.version ?? '1.0.0',
} as const;