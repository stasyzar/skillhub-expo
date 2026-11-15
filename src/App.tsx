import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { ENV } from '@config/env';
import { FONTS } from '@theme/fonts';

SplashScreen.preventAutoHideAsync();

export default function App() {

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
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.title}>SkillHub Foundation</Text>
      <Text style={styles.subtitle}>API: {ENV.API_URL}</Text>
      <Text style={styles.regular}>ENV: {ENV.APP_ENV}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    marginBottom: 8,
  },

  subtitle: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    marginBottom: 4,
  },

  regular: {
    fontFamily: FONTS.regular,
    fontSize: 14,
  },
});