import { RootStackParamList } from "@/interfaces/types";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CoursesScreen } from "./screens/CoursesScreen";
import { CourseDetailsScreen } from "./screens/CourseDetailsScreen";
import { MainTabsNavigator } from "./MainTabsNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainTabs">
                <Stack.Screen
                    name="MainTabs"
                    component={MainTabsNavigator}
                    options={{ headerShown: false }}
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