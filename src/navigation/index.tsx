import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CourseDetailsScreen } from '@navigation/screens/CourseDetailsScreen';
import { LoginScreen } from '@navigation/screens/LoginScreen';
import type { RootStackParamList } from '@interfaces/types';
import { useAppSelector } from '@store/hooks';
import { MainTabsNavigator } from './MainTabsNavigator';
import { linking } from './linking';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
    const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

    return (
        <NavigationContainer linking={linking}>
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
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{ headerShown: false }}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;