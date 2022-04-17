import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { ProfileBody, ProfileButtons } from './ProfileBody';

const FriendProfile = ({ route, navigation }) => {
    const { name, accountName, profileImage, following, followers, posts, follow } = route.params
    return (
        <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            padding: 10
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionic name='arrow-back' style={{
                        fontSize: 28,
                        color: 'black'
                    }} />
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '94%'
                }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}>
                        {name}
                    </Text>
                    <Feather name='more-vertical'
                        style={{
                            fontSize: 20,
                            color: 'black'
                        }} />
                </View>
            </View>
            <ProfileBody
                name={name}
                profileImage={profileImage}
                posts={posts}
                follow={follow}
                followers={followers}
                following={following}
                accountName={accountName}
            />
            <ProfileButtons id={1} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default FriendProfile;
