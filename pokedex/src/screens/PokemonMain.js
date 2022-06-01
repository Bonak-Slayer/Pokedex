import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from "react-native-linear-gradient/index";

const PokemonList = ({navigation}) => {
    const [pokemon, SetPokemon] = useState([]);
    const [isLoading, SetIsLoading] = useState(true);

    useEffect(() => {
        const request = async() => {
            let temporaryArray = [];
            for (let i = 1; i <= 600; i++){
                const response =  await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
                const data = await response.json();

                //GETTING SPECIES
                const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}/`);
                const speciesData = await speciesResponse.json();

                //INSERTING TYPE(s) INTO ARRAY
                let types = [];
                for(let j = 0; j < data.types.length; j++){
                    types.push(data.types[j].type.name)
                }

                //GETTING ENGLISH VERSION OF GENUS
                let genus = "";
                for (let k = 0; k < speciesData.genera.length; k++){
                    if (speciesData.genera[k].language.name === "en"){
                        genus = speciesData.genera[k].genus;
                    }
                }

                //CLEANING DESCRIPTION DATA
                let description = "";
                for (let k = 0; k < speciesData.flavor_text_entries.length; k++){
                    if (speciesData.flavor_text_entries[k].language.name === "en"){
                        description = speciesData.flavor_text_entries[k].flavor_text;
                    }
                }

                let newPokemon = {
                    "id": data.id,
                    "name": data.name,
                    "type": types,
                    "height": data.height,
                    "weight": data.weight,
                    "category": genus,
                    "description": description,
                    "image": data.sprites.front_default
                };

                console.log(data.name + " , " + genus);
                console.log(newPokemon.type);
                temporaryArray.push(newPokemon);
            }

            SetPokemon(temporaryArray);
            SetIsLoading(false);
        };
        request();
    }, []);

    if (isLoading){
        return (
            <LinearGradient
                colors={['#00d4ff', '#090979', '#020024' ]}
                style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' }}
            >
                <View>
                    <Text style={ styles.loadingText }>LOADING...</Text>
                </View>
            </LinearGradient>
        )
    }
    else {
        let finalList = pokemon.map((value, key) => {
            let uppercasedName = value.name;
            uppercasedName = uppercasedName.charAt(0).toUpperCase() + uppercasedName.slice(1);

            return <TouchableOpacity
                key={key}
                onPress={() => {navigation.navigate('Details', {'pokemon': pokemon[value.id - 1], 'pokemonName': uppercasedName })}}
            >
                <ImageBackground source={require('../../assets/pokemoncontainerA2.png')} resizeMode="cover" style={ styles.containerBg }>
                    {/* LEFT PANEL */}
                    <View style={{ marginLeft: 20 }}>
                        <Image source={{ uri: `${value.image}` }} style={ styles.pokeImage }/>
                    </View>

                    {/* RIGHT PANEL */}
                    <View style={ styles.pokemonInfoContainer }>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10}}>
                            <Text style={ styles.pokeInfo }>{ uppercasedName }</Text>
                        </View>
                        <View style={ styles.numberContainer }>
                            <Text style={ styles.numberHighlight }>No.{ value.id }</Text>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        });

        return(
            <View>
                <ScrollView
                    containerStyle={{flexGrow: 1, justifyContent: 'center' }}
                    style={ styles.container }
                >
                    {finalList}
                </ScrollView>
            </View>
        )
    }
};

const styles = {
    loadingText: {
        color: 'white',
        fontSize: 40,
        fontFamily: 'LEMONMILK-Bold'
    },

    container: {
        backgroundColor: '#073694'
    },

    containerBg: {
        height: 130,
        width: 400,
        flexDirection: 'row',
        alignItems: 'center'
    },

    pokeImage: {
        marginLeft: 15,
        marginBottom: 20,
        height: 143,
        width: 143
    },

    pokemonInfoContainer: {
        paddingLeft: 2,
        paddingRight: 5,
        justifyContent: 'center'
    },

    pokeInfo: {
        color: 'white',
        fontSize: 19,
        fontFamily: 'LEMONMILK-Bold'
    },

    numberContainer: {
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderWidth: 1,
        backgroundColor: 'black',
        padding: 5
    },

    numberHighlight: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'LEMONMILK-Bold'
    }
};

export default PokemonList;
