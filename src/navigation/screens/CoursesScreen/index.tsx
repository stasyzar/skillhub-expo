import { ActivityIndicator, FlatList, ListRenderItemInfo, Pressable, Text, TextInput, View } from "react-native";
import styles from './styles';
import { MainTabScreenProps } from "@/interfaces/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useCallback, useEffect, useState } from "react";
import { searchCoursesRequest } from "@/store/slices/coursesSlice";
import { Course } from "@/api/courses";
import { CourseCard } from "@/components/CourseCard";

export function CoursesScreen({ navigation }: MainTabScreenProps<'Courses'>) {
    const dispatch = useAppDispatch();
    const { items, isLoading, error } = useAppSelector((state) => state.courses);
    const [query, setQuery] = useState('');

    useEffect(() => {
        dispatch(searchCoursesRequest(''));
    }, [dispatch]);

    const handleSearchChange = (text: string) => {
        setQuery(text);
        dispatch(searchCoursesRequest(text));
    };

    const handleCoursePress = useCallback((courseId: string) => {
        navigation.navigate('CourseDetails', { courseId });
    }, [navigation],
    );

    const renderItem = useCallback(({ item }: ListRenderItemInfo<Course>) => (
        <CourseCard course={item} onPress={handleCoursePress} />
    ), [handleCoursePress],
    );

    const keyExtractor = useCallback((item: Course) => item.id, []);

    return (
        <View style={styles.container}>
            <View style={styles.searchWrapper}>
                <TextInput
                    style={styles.searchInput}
                    value={query}
                    onChangeText={handleSearchChange}
                    placeholder="Пошук курсів (напр. React, Saga)..."
                    placeholderTextColor="#9CA3AF"
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                />
            </View>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                contentContainerStyle={styles.listContent}
                keyboardShouldPersistTaps="handled"
                ListEmptyComponent={
                    <View style={styles.centerBox}>
                        {isLoading ? (
                            <ActivityIndicator size="large" />
                        ) : (
                            <Text style={styles.emptyText}>
                                {error ?? 'Курсів за цим запитом не знайдено'}
                            </Text>
                        )}
                    </View>
                }
            />
        </View>
    );
}