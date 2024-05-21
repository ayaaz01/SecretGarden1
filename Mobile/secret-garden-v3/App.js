import React, { useState, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './Screens/Shared/LoginPage';
import ClientHandler from './Screens/Client/ClientHandler';
import AdminHandler from './Screens/Admin/AdminHandler';
import NewsLetterList from './Screens/Client/NewsLetterList';
import AnnouncementDetail from './Screens/Client/AnnouncementDetail';

const Stack = createStackNavigator();

export default function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const memoizedSetLoggedIn = useCallback((value) => {
        setLoggedIn(value);
    }, []);

    const memoizedSetIsAdmin = useCallback((value) => {
        setIsAdmin(value);
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {!loggedIn ? (
                    <Stack.Screen name="LoginPage">
                        {props => <LoginPage {...props} setLoggedIn={memoizedSetLoggedIn} setIsAdmin={memoizedSetIsAdmin} />}
                    </Stack.Screen>
                ) : isAdmin ? (
                    <Stack.Screen name="AdminHandler" component={AdminHandler} />
                ) : (
                    <>
                        <Stack.Screen name="ClientHandler" component={ClientHandler} />
                        <Stack.Screen name="NewsLetterList" component={NewsLetterList} />
                        <Stack.Screen name="AnnouncementDetail" component={AnnouncementDetail} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
