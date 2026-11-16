import { Course } from "@/api/courses";
import { memo } from "react";
import { Pressable, Text, View } from "react-native";
import styles from './style'

interface CourseCardProps {
    course: Course;
    onPress: (courseId: string) => void;
}

export const CourseCard = memo(function CourseCard({
    course,
    onPress,
}: CourseCardProps) {
    return (
        <Pressable style={styles.card} onPress={() => onPress(course.id)}>
            <Text style={styles.title}>{course.title}</Text>
            <View style={styles.metaRow}>
                <Text style={styles.badge}>{course.level}</Text>
                <Text style={styles.duration}>{course.duration}</Text>
            </View>
        </Pressable>
    );
});