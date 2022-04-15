import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Searchbox from '../screenComponents/SearchBox';

const Search = () => {
    return (
        <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            position: 'relative'
        }}>
            <ScrollView>
                <Searchbox />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Search;
