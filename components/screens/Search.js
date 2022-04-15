import React from 'react';
import { View, StyleSheet, Text, ScrollView, } from 'react-native';
import SearchBox from '../screenComponents/SearchBox';
import SearchContent from '../screenComponents/SearchContent';

const Search = () => {
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
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Search;
