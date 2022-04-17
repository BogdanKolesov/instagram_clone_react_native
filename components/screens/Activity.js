import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { friendsProfileData } from '../screenComponents/Database';
import AntDesign from 'react-native-vector-icons/AntDesign'

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
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
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
                                    <Text style={{
                                        paddingRight: 3
                                    }}>
                                        {data.name},
                                    </Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                    <Text>
                        started following you
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
                        const [follow, setFollow] = useState(data.follow);

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
                                        alignItems: 'center',
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
                                    <TouchableOpacity
                                        activeOpacity={0.3}
                                        onPress={() => setFollow(!follow)}
                                        style={{
                                            width: follow ? 72 : 68
                                        }}>
                                        <View style={{
                                            width: '100%',
                                            height: 30,
                                            backgroundColor: follow ? null : '#3493d9',
                                            borderWidth: follow ? 1 : 0,
                                            borderColor: follow ? '#dedede' : 'null',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 5
                                        }}>
                                            <Text style={{
                                                color: follow ? 'black' : 'white'
                                            }}>
                                                {
                                                    follow ? 'Following' : 'Follow'
                                                }
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })
                }
                <Text style={{
                    fontWeight: 'bold',
                    paddingVertical: 10,
                    fontSize: 16
                }}>
                    Suggestions for you
                </Text>
                {
                    friendsProfileData.slice(6, 12).map((data, index) => {
                        const [follow, setFollow] = useState(data.follow);
                        const [close, setClose] = useState(false);

                        return (
                            <View key={index}>
                                {close ? null :
                                    (
                                        <View style={{
                                            paddingVertical: 10,
                                            flexDirection: 'row',
                                            width: '100%',
                                            justifyContent: 'space-between'
                                        }}>
                                            <View>
                                                <TouchableOpacity style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    maxWidth: '64%'
                                                }}>
                                                    <Image source={data.profileImage} style={{
                                                        width: 45,
                                                        height: 45,
                                                        borderRadius: 100,
                                                        marginRight: 10
                                                    }} />
                                                    <View style={{
                                                        width: '100%'
                                                    }}>
                                                        <Text style={{
                                                            fontSize: 14,
                                                            fontWeight: 'bold'
                                                        }}>
                                                            {data.name}
                                                        </Text>
                                                        <Text style={{
                                                            fontSize: 12,
                                                            opacity: 0.5
                                                        }}>
                                                            {data.accoundName}
                                                        </Text>
                                                        <Text style={{
                                                            fontSize: 12,
                                                            opacity: 0.5
                                                        }}>
                                                            Suggested for you
                                                        </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{
                                                flexDirection: 'row',
                                                alignItems: 'center'
                                            }}>
                                                {
                                                    follow ? (
                                                        <TouchableOpacity
                                                            onPress={() => setFollow(!follow)}

                                                            style={{
                                                                width: follow ? 98 : 68
                                                            }}>
                                                            <View style={{
                                                                width: '100%',
                                                                height: 30,
                                                                borderRadius: 5,
                                                                backgroundColor: follow ? null : '#3493d9',
                                                                borderWidth: follow ? 1 : 0,
                                                                borderColor: '#dedede',
                                                                justifyContent: 'center',
                                                                alignItems: 'center'
                                                            }}>
                                                                <Text style={{
                                                                    color: follow ? 'black' : 'white'
                                                                }}>
                                                                    {follow ? 'following' : 'follow'}
                                                                </Text>
                                                            </View>
                                                        </TouchableOpacity>
                                                    ) : (
                                                        <>
                                                            <TouchableOpacity
                                                                onPress={() => setFollow(!follow)}
                                                                style={{
                                                                    width: follow ? 98 : 68
                                                                }}>
                                                                <View style={{
                                                                    width: '100%',
                                                                    height: 30,
                                                                    borderRadius: 5,
                                                                    backgroundColor: follow ? null : '#3493d9',
                                                                    borderWidth: follow ? 1 : 0,
                                                                    borderColor: '#dedede',
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center'
                                                                }}>
                                                                    <Text style={{
                                                                        color: follow ? 'black' : 'white'
                                                                    }} >
                                                                        {follow ? 'following' : 'follow'}
                                                                    </Text>
                                                                </View>
                                                            </TouchableOpacity>
                                                            <TouchableOpacity
                                                                onPress={() => setClose(true)}
                                                                style={{
                                                                    paddingHorizontal: 10
                                                                }}>
                                                                <AntDesign name='close' style={{
                                                                    fontSize: 14,
                                                                    color: 'black',
                                                                    opacity: 0.8
                                                                }} />
                                                            </TouchableOpacity>
                                                        </>
                                                    )
                                                }
                                            </View>
                                        </View>
                                    )}
                            </View>
                        )
                    })
                }
                <View>
                    <TouchableOpacity style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 20
                    }}>
                        <Text style={{
                            color: '#3493d9',
                            fontSize: 16
                        }}>
                            See all suggestions
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Activity;
