import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ProfileBody, ProfileButtons } from './ProfileBody';
import { friendsProfileData } from './Database';

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
            <Text style={{
                fontSize: 14,
                paddingVertical: 10,
                fontWeight: 'bold'
            }}>
                Suggested for you
            </Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{
                    paddingTop: 10,
                }}
            >
                {
                    name === friendsProfileData.name ?
                        null : friendsProfileData.map((data, index) => {
                            const [isFollow, setIsFollow] = useState(data.follow)
                            const [close, setClose] = useState(false);
                            return (
                                <View key={index}>
                                    {data.name == name || close ? null :
                                        (
                                            <View style={{
                                                position: 'relative',
                                                width: 160,
                                                height: 200,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderWidth: 0.5,
                                                borderColor: '#dedede',
                                                borderRadius: 2,
                                            }}>
                                                <TouchableOpacity
                                                    onPress={() => setClose(!close)}
                                                    style={{
                                                        position: 'absolute',
                                                        top: 10,
                                                        right: 10
                                                    }}>
                                                    <AntDesign name='close' style={{
                                                        fontSize: 20,
                                                        color: 'black',
                                                        opacity: 0.5
                                                    }} />
                                                </TouchableOpacity>
                                                <Image source={data.profileImage} style={{
                                                    width: 80,
                                                    height: 80,
                                                    borderRadius: 100,
                                                    margin: 10
                                                }} />
                                                <Text style={{
                                                    fontWeight: 'bold',
                                                    fontSize: 16
                                                }}>
                                                    {data.name}
                                                </Text>
                                                <Text>
                                                    {data.accountName}
                                                </Text>
                                                <TouchableOpacity
                                                    onPress={() => setIsFollow(!isFollow)}
                                                    style={{ width: '80%', paddingVertical: 10 }}>
                                                    <View style={{
                                                        width: '100%',
                                                        height: 30,
                                                        borderRadius: 5,
                                                        backgroundColor: isFollow ? null : '#3493d9',
                                                        borderWidth: isFollow ? 1 : 0,
                                                        borderColor: '#dedede',
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}>
                                                        <Text style={{
                                                            color: isFollow ? 'black' : 'white'
                                                        }}>
                                                            {
                                                                isFollow ? 'Following' : 'Follow'
                                                            }
                                                        </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        )}
                                </View>
                            )
                        })
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default FriendProfile;
