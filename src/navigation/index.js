import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Todo from '../components/srceen/Todo';
import EditScreen from "../components/srceen/Todo/EditScreen";

const Stack = createStackNavigator();

const navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Todo" component={Todo} options={{ headerShown: false, }}/>
                <Stack.Screen name="Edit" component={EditScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default navigation;
