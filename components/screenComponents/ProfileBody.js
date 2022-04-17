import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

const ProfileBody = ({
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
                accountName ? null : (
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
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({})

export default ProfileBody;
