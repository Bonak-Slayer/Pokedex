import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient/index";

const Main = ({navigation}) => {
    return(
        <View style={styles.container}>
            <LinearGradient
                colors={['#00d4ff', '#090979', '#020024' ]}
                style={styles.linearGradient}
            >
                <View style={styles.mainScreenContentContainer}>
                    <Image source={require('../../assets/pokeIcon.png')} style={styles.pokeIcon}/>
                    <Text style={styles.mainScreenText}>POKÉDEX</Text>

                    <TouchableOpacity
                        style={styles.proceedButton}
                        onPress={() => {
                            navigation.navigate('List')
                        }}
                    >
                        <Text>BEGIN</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    linearGradient: {
        height: '100%',
        width: '100%'
    },

    mainScreenContentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    pokeIcon: {
        marginTop: '-15%',
        width: 350,
        height: 350
    },

    mainScreenText: {
        fontFamily: 'LEMONMILK-Bold',
        color: 'white',
        fontSize: 40,
    },

    proceedButton: {
        marginTop: '20%',
        height: 40,
        width: '40%',
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Main;
