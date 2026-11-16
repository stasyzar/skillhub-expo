import { RootStackParamList } from "@/interfaces/types";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CourseDetailsScreen } from "./screens/CourseDetailsScreen";
import { MainTabsNavigator } from "./MainTabsNavigator";
import { LoginScreen } from "./screens/LoginScreen";
import { useState } from "react";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isAuthenticated ? (
                    <>
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
                    </>
                ) : (
                    <Stack.Screen name="Login" options={{ headerShown: false }}>
                        {() => <LoginScreen onLogin={() => setIsAuthenticated(true)} />}
                    </Stack.Screen>
                )}

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;