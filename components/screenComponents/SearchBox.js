import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native'
import Ionic from 'react-native-vector-icons/Ionicons'

const SearchBox = () => {
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            paddingVertical: 19,
            position: 'relative'
        }}>
            <Ionic name='search' style={{
                fontSize: 18,
                opacity: 0.7,
                position: 'absolute',
                zIndex: 1,
                left: 25
            }}
            />
            <TextInput
                placeholder='Search'
                placeholderTextColor='#989098'
                style={{
                    width: '92%',
                    backgroundColor: '#ebebeb',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                    padding: 4,
                    paddingLeft: 42
                }} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default SearchBox;
