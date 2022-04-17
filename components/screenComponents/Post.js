import React, { useState } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionic from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'



const Post = () => {

    const postInfo = [
        {
            postTitle: 'Navalny',
            postPersonImage: require('../../storage/images/1.jpg'),
            postImage: require('../../storage/images/2.jpg'),
            likes: 131,
            isLiked: false
        },
        {
            postTitle: 'Navalny',
            postPersonImage: require('../../storage/images/1.jpg'),
            postImage: require('../../storage/images/5.jpg'),
            likes: 111,
            isLiked: false
        },
        {
            postTitle: 'Navalny',
            postPersonImage: require('../../storage/images/1.jpg'),
            postImage: require('../../storage/images/6.jpg'),
            likes: 421,
            isLiked: false
        },
        {
            postTitle: 'Navalny',
            postPersonImage: require('../../storage/images/1.jpg'),
            postImage: require('../../storage/images/4.jpg'),
            likes: 151,
            isLiked: false
        },
        {
            postTitle: 'Navalny',
            postPersonImage: require('../../storage/images/1.jpg'),
            postImage: require('../../storage/images/3.jpg'),
            likes: 541,
            isLiked: false
        },
        {
            postTitle: 'Navalny',
            postPersonImage: require('../../storage/images/1.jpg'),
            postImage: require('../../storage/images/2.jpg'),
            likes: 543,
            isLiked: false
        },
        {
            postTitle: 'Navalny',
            postPersonImage: require('../../storage/images/1.jpg'),
            postImage: require('../../storage/images/1.jpg'),
            likes: 131,
            isLiked: false
        }
    ]

    return (
        <View>
            {
                postInfo.map((data, index) => {
                    const [like, setLike] = useState(data.isLiked);
                    return (
                        <View key={index} style={{
                            paddingBottom: 10,
                            borderBottomColor: 'gray',
                            borderBottomWidth: 0.1,
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: 15
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <Image source={data.postPersonImage} style={{
                                        width: 48, height: 48, borderRadius: 100
                                    }} />
                                    <View style={{
                                        paddingLeft: 5
                                    }}>
                                        <Text style={{
                                            fontSize: 15,
                                            fontWeight: 'bold'
                                        }}>
                                            {data.postTitle}
                                        </Text>
                                    </View>
                                </View>
                                <Feather name='more-vertical' style={{
                                    fontSize: 20,
                                }} />
                            </View>
                            <View style={{
                                position: 'relative',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Image
                                    source={data.postImage} style={{
                                        width: '100%', height: 400
                                    }} />
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingHorizontal: 12,
                                paddingVertical: 15
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',

                                }}>
                                    <TouchableOpacity onPress={() => setLike(!like)}>
                                        <AntDesign name={like ? 'heart' : 'hearto'}
                                            style={{
                                                paddingRight: 10,
                                                fontSize: 24,
                                                color: like ? 'red' : 'black'
                                            }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Ionic name='ios-chatbubble-outline'
                                            style={{
                                                fontSize: 24,
                                                paddingRight: 10,
                                            }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Feather name='navigation'
                                            style={{
                                                fontSize: 24,
                                            }} />
                                    </TouchableOpacity>
                                </View>
                                <Feather name='bookmark' style={{
                                    fontSize: 24
                                }} />
                            </View>
                            <View style={{
                                marginHorizontal: 15
                            }}>
                                <Text>
                                    Liked by {like ? 'you and' : ''} {''}
                                    {like ? data.likes + 1 : data.likes} others
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: 'bold',
                                    paddingVertical: 2
                                }}>
                                    Love and peace!
                                </Text>
                                <Text style={{
                                    opacity: 0.4,
                                    paddingVertical: 2
                                }}>
                                    View all comments
                                </Text>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}>
                                        <Image source={data.postPersonImage} style={{
                                            width: 25,
                                            height: 25,
                                            borderRadius: 100,
                                            backgroundColor: 'orange',
                                            marginRight: 10
                                        }} />
                                        <TextInput placeholder='Add a comment' style={{
                                            opacity: 0.5
                                        }} />
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                        <Entypo name='emoji-happy' style={{
                                            fontSize: 15,
                                            color: 'blue',
                                            opacity: 0.2,
                                            marginRight: 10
                                        }} />
                                        <Entypo name='emoji-neutral' style={{
                                            fontSize: 15,
                                            color: 'pink',
                                            opacity: 0.2,
                                            marginRight: 10
                                        }} />
                                        <Entypo name='emoji-sad' style={{
                                            fontSize: 15,
                                            color: 'red',
                                            opacity: 0.2
                                        }} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({})

export default Post;
