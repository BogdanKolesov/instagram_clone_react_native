import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Image } from 'react-native';

const Activity = () => {
    return (
        <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white'
        }} >
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                borderBottomWidth: 0.5,
                borderBottomColor: '#dedede',
                padding: 10
            }}>Activity</Text>
            <ScrollView style={{
                margin: 10
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold'
                }}>
                    This week
                </Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Activity;
