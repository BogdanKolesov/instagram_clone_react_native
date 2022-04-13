import React, { useState } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'


const Post = () => {

    const postInfo = [
        {
            postTitle: 'Navalny',
            postPersonImage: require('../../storage/images/1.jpg'),
            postImage: require('../../storage/images/2.jpg'),
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
