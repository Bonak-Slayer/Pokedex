/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/authnavigation/authnavigator';

const App: () => Node = () => {
    return (
        <NavigationContainer>
            <AuthNavigator></AuthNavigator>
        </NavigationContainer>
    )
};

export default App;
