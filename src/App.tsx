import { useCallback, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, useColorScheme } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { ENV } from '@config/env';
import { FONTS, initTheme } from '@theme/index';
import SkillLogo from '@assets/icons/skill-logo.svg';

SplashScreen.preventAutoHideAsync();
initTheme();

export default function App() {

  const colorScheme = useColorScheme();

  useMemo(() => {
    initTheme(colorScheme);
  }, [colorScheme]);

  const [fontsLoaded, fontError] = useFonts({
    [FONTS.regular]: require('./assets/fonts/Montserrat-Regular.ttf'),
    [FONTS.medium]: require('./assets/fonts/Montserrat-Medium.ttf'),
    [FONTS.bold]: require('./assets/fonts/Montserrat-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View key={colorScheme ?? 'light'} style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.title}>SkillHub Foundation</Text>
      <Text style={styles.subtitle}>API: {ENV.API_URL}</Text>
      <Text style={styles.regular}>ENV: {ENV.APP_ENV}</Text>
      <View style={{ flexDirection: 'row', gap: 16, marginBottom: 16 }}>
        <SkillLogo width={48} height={48} fill="#6C63FF" />
        <SkillLogo width={48} height={48} fill="#FF6584" />
      </View>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$background',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    color: '$text',
    marginBottom: 8,
  },

  subtitle: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    color: '$textSecondary',
    marginBottom: 4,
  },

  regular: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    color: '$textSecondary',
  },
});