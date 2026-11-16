import { MainTabParamList } from "@/interfaces/types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CoursesScreen } from "./screens/CoursesScreen";
import { ProfileScreen } from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator<MainTabParamList>();

export function MainTabsNavigator() {
    return (
        <Tab.Navigator initialRouteName="Courses">
            <Tab.Screen
                name="Courses"
                component={CoursesScreen}
                options={{ title: 'SkillHub Courses' }} />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ title: 'Profile' }} />
        </Tab.Navigator>
    )
}