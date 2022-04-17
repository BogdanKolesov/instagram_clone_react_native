import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons'

const FriendProfile = ({ route, navigation }) => {
    const { name, profileImage, following, followers, posts, follow } = route.params
    return (
        <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            padding: 10
        }}>
            <View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionic name='arrow-back' style={{
                        fontSize: 28,
                        color: 'black'
                    }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default FriendProfile;
