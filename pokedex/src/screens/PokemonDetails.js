import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, ScrollView } from 'react-native'
import {getTypeImagePath} from './types';

const PokemonDetails = ({navigation, route}) => {
    const selectedPokemon = route.params.pokemon;
    const name = route.params.pokemonName;

    let types = selectedPokemon.type.map((value, key) => {
        let convertToUpper = value;
        convertToUpper = value.charAt(0).toUpperCase() + convertToUpper.slice(1);

        let path = getTypeImagePath(value);

        return(
            <View key={key} style={{ alignItems: 'center', justifyContent: 'center', margin: 20 }}>
                <Image source={path} style={ styles.typeImage }/>
                <Text>{ convertToUpper }</Text>
            </View>
        )
    });

    return (
        <View style={ styles.container }>
            <View style={ styles.pokemonVisualContainer }>
                <ImageBackground source={require('../../assets/pokeballLowerOpacity.png')} style={ styles.pokeLogo }>
                    <Image source={{uri: selectedPokemon.image }} style={ styles.pokemonImage }/>

                    <View style={{ width: '100%', alignItems: 'center', marginBottom: 30 }}>
                        <View style={ styles.pokemonIdContainer }>
                            <Text style={ styles.pokemonId }>No. { selectedPokemon.id }</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <ScrollView containerStyle={{ justifyContent: 'center' }} style={ styles.descriptionContainer }>
                <View style={ styles.pokemonNameContainer }>
                    <Text style={ styles.pokemonName }>{ name }</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>{types}</View>
                <View style={ styles.traitsContainer }>
                    <View style={ styles.traitContainer }>
                        <Text style={[ styles.traitText, { fontFamily: 'LEMONMILK-Bold', marginBottom: 20 }]}>Height</Text>
                        <Text style={[ styles.traitText, { marginBottom: 20 } ]}>{ selectedPokemon.height }</Text>
                    </View>

                    <View style={ styles.traitContainer }>
                        <Text style={[ styles.traitText, { fontFamily: 'LEMONMILK-Bold', marginBottom: 20 }]}>Weight</Text>
                        <Text style={[ styles.traitText, { marginBottom: 20 } ]}>{ selectedPokemon.weight }</Text>
                    </View>

                    <View style={ styles.traitContainer }>
                        <Text style={[ styles.traitText, { fontFamily: 'LEMONMILK-Bold', marginBottom: 20 }]}>Species</Text>
                        <Text style={[ styles.traitText, { marginBottom: 20 } ]}>{ selectedPokemon.category }</Text>
                    </View>
                </View>
                <View style={ styles.flavorTextContainer }>
                    <View style={{ width: '100%', alignItems: 'center', marginBottom: 10 }}>
                        <Text style={{ fontFamily: 'LEMONMILK-Bold', fontSize: 18 }}>Description:</Text>
                    </View>
                    <Text style={ styles.flavorText }>{ selectedPokemon.description }</Text>
                </View>
            </ScrollView>
        </View>
    )
};

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#073694'
    },

    pokemonVisualContainer: {
        height: '40%',
        width: '100%',
        borderBottomColor: 'black',
        borderBottomWidth: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    pokeLogo: {
        height: 240,
        width: 240,
        justifyContent: 'center',
        alignItems: 'center'
    },

    pokemonImage: {
        height: 230,
        width: 230,
    },

    descriptionContainer: {
        height: '60%',
        width: '100%',
        backgroundColor: 'white'
    },

    pokemonNameContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10
    },

    pokemonName: {
        fontSize: 30,
        fontFamily: 'LEMONMILK-Bold',
    },

    pokemonIdContainer: {
        width: '40%',
        backgroundColor: 'black',
        borderRadius: 30,
        alignItems: 'center'
    },

    pokemonId: {
        fontSize: 18,
        fontFamily: 'LEMONMILK-Bold',
        color: 'white'
    },

    typeImage: {
        height: 60,
        width: 60
    },

    traitsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },

    traitContainer: {
        margin: 5,
        padding: 5,
        width: '30%',
        height: 90,
        borderBottomWidth: 2,
        borderColor: '#F1F1F1',
        borderRadius: 15,
        alignItems: 'center'
    },

    traitText: {
        fontSize: 14
    },

    flavorTextContainer: {
        padding: 30,
        marginTop: 10,
        marginBottom: 100
    },

    flavorText: {
        fontSize: 17
    }
};

export default PokemonDetails;
