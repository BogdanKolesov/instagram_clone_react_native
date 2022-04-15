import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import SearchBox from '../screenComponents/SearchBox';
import SearchContent from '../screenComponents/SearchContent';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Search = () => {

    const [image, setImage] = useState();

    return (
        <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            position: 'relative'
        }}>
            <ScrollView>
                <SearchBox />
                <SearchContent />
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
        </View>
    );
}

const styles = StyleSheet.create({})

export default Search;
