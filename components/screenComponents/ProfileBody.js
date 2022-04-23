import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';

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
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: 10
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold'
                            }}>
                                {accountName}
                            </Text>
                            <Feather name='chevron-down' style={{
                                fontSize: 20,
                                color: 'black',
                                paddingHorizontal: 5,
                                opacity: 0.5
                            }} />
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Feather name='plus-square' style={{
                                fontSize: 25,
                                color: 'black',
                                paddingHorizontal: 15
                            }} />
                            <Feather name='menu' style={{
                                fontSize: 25,
                                color: 'black'
                            }} />
                        </View>
                    </View>
                ) : (
                    <View><Text>Hello</Text></View>
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

export const ProfileButtons = ({ id, name, accountName, profileImage }) => {
    const [follow, setFollow] = useState(follow);
    const navigation = useNavigation()
    return (
        <>
            {
                id == 0 ? (
                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        paddingVertical: 5
                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.push('EditProfile', {
                                name: name,
                                accountName: accountName,
                                profileImage: profileImage
                            })}
                            style={{
                                width: '100%'
                            }}>
                            <View style={{
                                width: '100%',
                                height: 35,
                                borderRadius: 5,
                                borderColor: '#dedede',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderWidth: 1,

                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 14,
                                    letterSpacing: 1,
                                    opacity: 0.5
                                }}>
                                    Edit Profile
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ) : (
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