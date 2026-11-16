import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

type LoginScreenProps = {
    onLogin: () => void;
};

export function LoginScreen({ onLogin }: LoginScreenProps) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>SkillHub</Text>
            <Text style={styles.subtitle}>Login to continue </Text>
            <Pressable style={styles.button} onPress={onLogin}>
                <Text style={styles.buttonText}>Sing In</Text>
            </Pressable>
        </SafeAreaView>
    )
}