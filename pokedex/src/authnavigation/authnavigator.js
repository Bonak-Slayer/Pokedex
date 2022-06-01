import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../screens/Main';
import PokemonList from '../screens/PokemonMain';
import PokemonDetails from '../screens/PokemonDetails';


const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={Main}/>
            <Stack.Screen name="List" component={PokemonList} />
            <Stack.Screen name="Details" component={PokemonDetails} />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
