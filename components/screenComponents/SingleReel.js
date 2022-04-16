import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Video } from 'expo-av';
import Ionic from 'react-native-vector-icons/Ionicons'


const SingleReel = ({ item, index, currentIndex }) => {

    const windowWidth = Dimensions.get('window').width
    const windowHeight = Dimensions.get('window').height

    const videoRef = useRef()
    const [status, setStatus] = useState({})
    const [mute, setMute] = useState(false);


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
                    bottom: 300,
                    right: 30,
                    backgroundColor: 'rgba(52,52,52,0.6)',
                    padding: 12,
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
        </View>
    );
}

const styles = StyleSheet.create({})

export default SingleReel;
