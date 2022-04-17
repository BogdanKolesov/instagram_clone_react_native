import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { friendsProfileData } from '../screenComponents/Database';

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
                <View style={{
                    flexDirection: 'row',
                    paddingVertical: 10
                }}>
                    {
                        friendsProfileData.slice(0, 3).map((data, index) => {
                            return (
                                <TouchableOpacity key={index}>
                                    <Text>
                                        {data.name}
                                    </Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                    <Text>
                        Started following you
                    </Text>
                </View>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 16
                }}>
                    Earlier
                </Text>
                {
                    friendsProfileData.slice(3, 6).map((data, index) => {
                        return (
                            <View key={index} style={{
                                width: '100%',

                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    paddingVertical: 20,
                                    width: '100%'
                                }}>
                                    <TouchableOpacity style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        maxWidth: '64%',
                                        alignItems: 'center'
                                    }}>
                                        <Image source={data.profileImage} style={{
                                            width: 45,
                                            height: 45,
                                            borderRadius: 100,
                                            marginRight: 10
                                        }} />
                                        <Text style={{
                                            fontSize: 15
                                        }}>
                                            <Text style={{
                                                fontWeight: 'bold'
                                            }}>
                                                {data.name}
                                            </Text>
                                            , who you might know, is on Bogdanogram
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Activity;
