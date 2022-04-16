import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, SatusBar } from 'react-native';
import SearchBox from '../screenComponents/SearchBox';
import SearchContent from '../screenComponents/SearchContent';
import AntDesign from 'react-native-vector-icons/AntDesign'

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
                        <View>
                            <StatusBar backgroundColor='#525252' barStyle='dark-content' />
                            <View style={{
                                position: 'absolute',
                                top: windowheight / 6,
                                left: windowHeight / 18,
                                backgroundColor: 'white',
                                width: 350,
                                height: 465,
                                zIndex: 1,
                                elevation: 50
                            }}>

                            </View>
                        </View>
                    ) : null
            }
        </View>
    );
}

const styles = StyleSheet.create({})

export default Search;
