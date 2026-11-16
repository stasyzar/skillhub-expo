import { ActivityIndicator, Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { loginUser } from '@store/slices/authSlice';
import { styles } from './styles';

export function LoginScreen() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.auth.isLoading);

  const handleSignIn = () => {
    dispatch(loginUser('anastasia@skillhub.dev'));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>SkillHub</Text>
      <Text style={styles.subtitle}>Увійдіть, щоб продовжити</Text>
      <Pressable
        style={styles.button}
        onPress={handleSignIn}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.buttonText}>Sign In</Text>
        )}
      </Pressable>
    </SafeAreaView>
  );
}