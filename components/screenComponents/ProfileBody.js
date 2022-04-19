import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'


export const ProfileBody = ({
    name,
    profileImage,
    accountName,
    follow,
    followers,
    following,
    posts
}) => {
    return (
        <View>
            {
                accountName ? (
                    <View>

                    </View>
                ) : (
                    <View></View>
                )
            }
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingVertical: 20
            }}>

                <View style={{
                    alignItems: 'center'
                }}>
                    <Image source={profileImage} style={{
                        resizeMode: 'cover',
                        width: 80,
                        height: 80,
                        borderRadius: 100
                    }} />
                    <Text style={{
                        paddingVertical: 5,
                        fontWeight: 'bold',
                    }}>
                        {name}
                    </Text>
                </View>
                <View style={{
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 18
                    }}>
                        {posts}
                    </Text>
                    <Text style={{
                        fontSize: 16
                    }}>
                        Posts
                    </Text>
                </View>
                <View style={{
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 18
                    }}>
                        {followers}
                    </Text>
                    <Text style={{
                        fontSize: 16
                    }}>
                        Followers
                    </Text>
                </View>
                <View style={{
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 18
                    }}>
                        {following}
                    </Text>
                    <Text style={{
                        fontSize: 16
                    }}>
                        Following
                    </Text>
                </View>

            </View>
        </View>
    );
}

export const ProfileButtons = ({ id }) => {
    const [follow, setFollow] = useState(follow);

    return (
        <>
            {
                id == 0 ? (null) : (
                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity style={{
                            width: '42%'
                        }} onPress={() => setFollow(!follow)}>
                            <View style={{
                                width: '100%',
                                height: 35,
                                borderRadius: 5,
                                backgroundColor: follow ? null : '#3493d9',
                                borderWidth: follow ? 1 : 0,
                                borderColor: '#dedede',
                                justifyContent: 'center',
                                alignItems: 'center'

                            }}>
                                <Text style={{
                                    color: follow ? 'black' : 'white',
                                    fontSize: 16
                                }}>
                                    {
                                        follow ? 'Following' : 'Follow'
                                    }
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{
                            width: '42%',
                            height: 35,
                            borderWidth: 1,
                            borderColor: '#dedede',
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                color: 'black',
                                fontSize: 16
                            }}>
                                Message
                            </Text>
                        </View>
                        <View style={{
                            width: '10%',
                            height: 35,
                            borderWidth: 1,
                            borderColor: '#dedede',
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Feather name='chevron-down' style={{
                                fontSize: 20,
                                color: 'black'
                            }} />
                        </View>
                    </View>
                )
            }
        </>
    )
}