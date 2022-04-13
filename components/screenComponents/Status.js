import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Animated, StatusBar, Image, TouchableOpacity, TextInput } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'



const Status = ({ route, navigation }) => {
    const { name } = route.params
    const { image } = route.params

    useEffect(() => {
        let timer = setTimeout(() => {
            navigation.goBack()
        }, 5000)

        Animated.timing(progress, {
            toValue: 5,
            duration: 5000,
            useNativeDriver: false
        }).start()
        return () => clearTimeout(timer)
    }, []);

    const [progress, setProgress] = useState(new Animated.Value(0));

    const progressAnimation = progress.interpolate({
        inputRange: [0, 5],
        outputRange: ['0%', '100%']
    })



    return (
        <View style={{
            backgroundColor: 'black',
            height: '100%',
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <StatusBar backgroundColor='black' barStyle='light-content' />
            <View style={{
                height: 3,
                width: '95%',
                borderWidth: 1,
                backgroundColor: 'gray',
                position: 'absolute',
                top: 18
            }}>
                <Animated.View style={{
                    height: '100%',
                    backgroundColor: 'white',
                    width: progressAnimation
                }}>
                </Animated.View>
            </View>
            <View style={{
                padding: 15,
                flexDirection: 'row',
                alignItems: 'center',
                position: 'absolute',
                top: 14,
                left: 0,
                width: '98%'
            }}>
                <View style={{
                    borderRadius: 100,
                    width: 30,
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image source={image} style={{
                        borderRadius: 100,
                        backgroundColor: 'orange',
                        resizeMode: 'cover',
                        width: '92%',
                        height: '92%'
                    }} />
                </View>
                <View style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%',
                    paddingLeft: 5
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 15,
                    }}>
                        {name}
                    </Text>
                    <TouchableOpacity style={{
                        marginRight: '7%'
                    }}>
                        <Ionic name='close'
                            onPress={() => navigation.goBack()}
                            style={{
                                fontSize: 28,
                                color: 'white',
                                opacity: 0.6
                            }} />
                    </TouchableOpacity>
                </View>
            </View>
            <Image source={image} style={{
                position: 'absolute',
                width: '100%',
                height: '80%'
            }} />
            <View style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginVertical: 10,
                width: '100%'
            }}>
                <TextInput placeholder='Send message' placeholderTextColor='white'
                    style={{
                        borderColor: 'white',
                        borderRadius: 25,
                        width: '85%',
                        height: 50,
                        paddingLeft: 20,
                        borderWidth: 1,
                        color: 'white',
                        fontSize: 20,

                    }}
                />
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name='chevron-right' style={{
                        color: 'white',
                        fontSize: 30
                    }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Status;
