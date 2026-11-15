import { Appearance } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { DARK_THEME, LIGHT_THEME } from './colors';

export const initTheme = (mode?: 'light' | 'dark' | null) => {
  const colorScheme = mode ?? Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? DARK_THEME : LIGHT_THEME;
  EStyleSheet.build(theme);
};

export * from './colors';
export * from './fonts';