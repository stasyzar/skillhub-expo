import { RootStackParamList } from "@/interfaces/types";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CoursesScreen } from "./screens/CoursesScreen";
import { CourseDetailsScreen } from "./screens/CourseDetailsScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Courses">
                <Stack.Screen
                    name="Courses"
                    component={CoursesScreen}
                    options={{ title: 'SkillHub Courses' }}
                />
                <Stack.Screen
                    name="CourseDetails"
                    component={CourseDetailsScreen}
                    options={{ title: 'Course Details' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;