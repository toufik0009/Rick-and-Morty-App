import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from 'react-native-vector-icons/AntDesign';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import WishList from '../screens/WishList';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNested = () => {
    return (
        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name='DetailScreen' component={DetailScreen} options={{ headerShown: false }} />
            <Stack.Screen 
                name='WishList' 
                component={WishList} 
                options={{ headerShown: true, title: 'My Wish Items' }} 
            />
        </Stack.Navigator>
    );
};

const TabNavigationScreens = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: 'orange',
                tabBarInactiveTintColor: 'gray',
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'WishList') {
                        iconName = 'heart';
                    }
                    return <HomeIcon name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeNested}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="WishList"
                component={WishList}
                options={{ headerShown: true, title: 'Wishlist' }}
            />
        </Tab.Navigator>
    );
};

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='WelcomeScreen'>
                <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='MainScreen' component={TabNavigationScreens} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
