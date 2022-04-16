import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';


const SingleReel = ({ item, index, currentIndex }) => {

    const windowWidth = Dimensions.get('window').width
    const windowHeight = Dimensions.get('window').height

    const videoRef = useRef()
    const [status, setStatus] = useState({})



    return (
        <View style={{
            width: windowWidth,
            height: windowHeight
        }}
        >
            <TouchableOpacity
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

                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute'
                    }}
                />

            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({})

export default SingleReel;
