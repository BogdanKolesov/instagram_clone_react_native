import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Video } from 'expo-av';
import Ionic from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'


const SingleReel = ({ item, index, currentIndex }) => {

    const windowWidth = Dimensions.get('window').width
    const windowHeight = Dimensions.get('window').height

    const videoRef = useRef()
    const [status, setStatus] = useState({})
    const [mute, setMute] = useState(false);
    const [like, setLike] = useState(item.isLike);
    const [likes, setLikes] = useState(item.likes);


    return (
        <View style={{
            width: windowWidth,
            height: windowHeight
        }}
        >
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() =>
                    status.isPlaying ? videoRef.current.pauseAsync() : videoRef.current.playAsync()
                }
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute'
                }}>
                <Video
                    ref={videoRef}
                    resizeMode="cover"
                    isLooping={true}
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                    repeat={true}
                    shouldPlay={true}
                    source={item.video}
                    volume={mute ? 0 : 1}
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute'
                    }}
                />
            </TouchableOpacity>
            <Ionic
                onPress={() => setMute(!mute)}
                name={mute ? 'volume-mute' : 'volume-high-outline'}
                style={{
                    fontSize: 20,
                    color: 'white',
                    position: 'absolute',
                    bottom: '50%',
                    right: 10,
                    backgroundColor: 'rgba(52,52,52,0.6)',
                    padding: 15,
                    borderRadius: 100
                }} />
            <View style={{
                position: 'absolute',
                width: windowWidth,
                zIndex: 1,
                bottom: 80,
                padding: 10
            }}>
                <View style={{

                }}>
                    <TouchableOpacity style={{
                        width: 150
                    }} >
                        <View style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                width: 60,
                                height: 60,
                                borderRadius: 100,
                                backgroundColor: 'white',
                                margin: 12
                            }}>
                                <Image source={item.postProfile}
                                    style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        resizeMode: 'cover',
                                        borderRadius: 100
                                    }} />
                            </View>
                            <Text style={{
                                fontSize: 20,
                                color: 'white',
                                fontWeight: 'bold'

                            }}>
                                {item.title}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{
                        color: 'white',
                        fontSize: 14,
                        marginHorizontal: 12
                    }}>
                        {item.description}
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                        padding: 10
                    }}>
                        <Ionic name='ios-musical-note' style={{
                            color: 'white',
                            fontSize: 16
                        }} />
                        <Text style={{
                            color: 'white',
                            fontSize: 14
                        }}>
                            Original audio
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{
                flexDirection: 'column',
                position: 'absolute',
                alignItems: 'center',
                bottom: '10%',
                right: '3%',
            }}>
                <TouchableOpacity
                    onPress={() => setLike(!like)}
                    style={{
                        padding: 10,
                        zIndex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <AntDesign
                        name={like ? 'heart' : 'hearto'}
                        style={{
                            color: like ? 'red' : 'white',
                            fontSize: 25
                        }} />
                    <Text style={{
                        color: 'white'
                    }}>
                        {like ? item.likes + 1 : item.likes}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionic name='ios-chatbubble-outline' style={{
                        color: 'white',
                        fontSize: 25,
                        padding: 10,
                        zIndex: 1
                    }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionic name='paper-plane-outline' style={{
                        color: 'white',
                        fontSize: 25,
                        padding: 10,
                        zIndex: 1
                    }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name='more-vertical' style={{
                        color: 'white',
                        fontSize: 25,
                        padding: 10,
                        zIndex: 1
                    }} />
                </TouchableOpacity>
                <View style={{
                    width: 30,
                    height: 30,
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: 'white',
                    magin: 10
                }}>
                    <Image source={item.postProfile}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 10,
                            resizeMode: 'cover'
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default SingleReel;
