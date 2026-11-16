import { Pressable, Text, View } from 'react-native';
import { styles } from './styles'
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { logoutUser } from '@/store/slices/authSlice';

export function ProfileScreen() {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.auth.user);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{user?.name ?? 'Profile'}</Text>
            <Text style={styles.subtitle}>{user?.email ?? ''}</Text>
            <Pressable
                style={styles.button}
                onPress={() => dispatch(logoutUser())}>
                <Text style={styles.buttonText}>Log Out</Text>
            </Pressable>
        </View>
    );
}