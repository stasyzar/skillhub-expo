import { Pressable, Text, View } from 'react-native';
import styles from './styles';
import { RootStackScreenProps } from '@/interfaces/types';

export function CourseDetailsScreen({
    route,
    navigation,
}: RootStackScreenProps<'CourseDetails'>) {
    const { courseId } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Course Details</Text>
            <Text style={styles.subtitle}>Id {courseId}</Text>
            <Pressable style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Go Back</Text>
            </Pressable>
        </View>
    )
}