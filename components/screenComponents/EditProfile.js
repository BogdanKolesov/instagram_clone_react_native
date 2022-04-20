import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ToastAndroid } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons'


const EditProfile = ({ route, navigation }) => {
    const { name, accountName, profileImage } = route.params
    const ToastMessage = () => {
        ToastAndroid.show('Edit Sucessfully!!!', ToastAndroid.SHORT)
    }
    return (
        <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            paddingHorizontal: 5,
            paddingTop: 5
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionic name='close-outline' style={{
                        fontSize: 36,
                    }} />
                </TouchableOpacity>
                <Text style={{
                    fontSize: 22,
                    fontWeight: 'bold'
                }}>Edit Profile</Text>
                <TouchableOpacity onPress={() => {
                    ToastMessage();
                    navigation.goBack()
                }}>
                    <Ionic name='checkmark' style={{
                        fontSize: 36,
                        color: '#3493d9'
                    }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default EditProfile;
