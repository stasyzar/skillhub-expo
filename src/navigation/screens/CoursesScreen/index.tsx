import { Pressable, Text, View } from "react-native";
import styles from './styles';
import { RootStackScreenProps } from "@/interfaces/types";

export function CoursesScreen({navigation}: RootStackScreenProps<'Courses'>) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Courses Screen</Text>
            <Pressable 
            style={styles.button}
            onPress={() => navigation.navigate('CourseDetails' , {courseId: '1'})}>
                <Text style={styles.buttonText}>Open Course #1</Text>
            </Pressable>
        </View>
    )
}