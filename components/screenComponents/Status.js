import React from 'react';
import { View, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons'



const Status = ({ route, navigation }) => {
    const { name } = route.params
    const { image } = route.params
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
                <View style={{
                    height: '100%',
                    backgroundColor: 'white',
                    width: '50%'
                }}>
                </View>
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
                    width: '100%',
                    paddingLeft: 5
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 14,
                    }}>
                        {name}
                    </Text>
                    <TouchableOpacity>

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Status;
