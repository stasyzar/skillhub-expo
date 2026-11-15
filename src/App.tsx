import { useCallback, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View, useColorScheme } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { ENV } from '@config/env';
import { FONTS, initTheme } from '@theme/index';
import SkillLogo from '@assets/icons/skill-logo.svg';
import { useTranslation } from 'react-i18next';
import '@localization/index';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from '@navigation/index';

SplashScreen.preventAutoHideAsync();
initTheme();

export default function App() {

  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'uk' ? 'en' : 'uk';
    i18n.changeLanguage(nextLang);
  };

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
    <SafeAreaProvider>
      <View
        key={colorScheme ?? 'light'}
        style={styles.root}
        onLayout={onLayoutRootView}>
        <Navigation />
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      </View>
    </SafeAreaProvider>
  );
}

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  }
});