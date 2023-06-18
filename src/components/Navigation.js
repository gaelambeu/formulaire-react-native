import React from "react";
import {Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "../pages/HomeScreen";
import LoginScreen from "../pages/LoginScreen";
import RegisterScreen from "../pages/RegisterScreen";
import UserScreen from "../user/UserScreen";


const Stack = createNativeStackNavigator();

const Navigation = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />

                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="UserScreen" component={UserScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;