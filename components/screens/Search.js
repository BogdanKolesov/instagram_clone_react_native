import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Image, Dimensions, StatusBar } from 'react-native';
import SearchBox from '../screenComponents/SearchBox';
import SearchContent from '../screenComponents/SearchContent';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionic from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'


const Search = () => {

    const [image, setImage] = useState(null)

    const windowWidth = Dimensions.get('window').width
    const windowHeight = Dimensions.get('window').height

    const getData = (data) => {
        setImage(data)
    }

    return (
        <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            position: 'relative'
        }}>
            <ScrollView>
                <SearchBox />
                <SearchContent data={getData} />
                <TouchableOpacity style={{
                    margin: 25,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <AntDesign name='pluscircleo' style={{
                        fontSize: 48,
                        opacity: 0.5
                    }} />
                </TouchableOpacity>
            </ScrollView>
            {
                image ?
                    (
                        <View style={{
                            position: 'absolute',
                            zIndex: 1,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(52,52,52,0.8)'
                        }}>
                            <StatusBar backgroundColor='#525252' barStyle='dark-content' />
                            <View style={{
                                position: 'absolute',
                                top: windowHeight / 6,
                                left: windowWidth / 10,
                                backgroundColor: 'white',
                                width: 350,
                                height: 465,
                                zIndex: 1,
                                elevation: 50,
                                borderRadius: 15
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingVertical: 10,
                                    paddingHorizontal: 15
                                }}>
                                    <Image source={image} style={{
                                        width: 30,
                                        height: 30,
                                        borderRadius: 100
                                    }} />
                                    <View style={{
                                        paddingLeft: 8
                                    }}>
                                        <Text style={{
                                            fontSize: 12,
                                            fontWeight: '600',
                                        }}>
                                            some_persone
                                        </Text>
                                    </View>
                                </View>
                                <Image source={image} style={{
                                    width: '100%',
                                    height: '80%'
                                }} />
                                <View style={{
                                    justifyContent: 'space-around',
                                    width: '100%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    padding: 8
                                }}>
                                    <Ionic name='ios-heart-outline' style={{
                                        fontSize: 26
                                    }} />
                                    <Ionic name='ios-person-circle-outline' style={{
                                        fontSize: 26
                                    }} />
                                    <Feather name='navigation' style={{
                                        fontSize: 26
                                    }} />
                                </View>
                            </View>
                        </View>
                    ) : null
            }
        </View>
    );
}

const styles = StyleSheet.create({})

export default Search;
