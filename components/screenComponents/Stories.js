import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'


const Stories = () => {

    const navigation = useNavigation()


    const storyInfo = [
        {
            id: 1,
            name: 'Story',
            image: require('../../storage/images/7.png')
        },
        {
            id: 0,
            name: 'Andrew_Wolf',
            image: require('../../storage/images/2.jpg')
        },
        {
            id: 0,
            name: 'Sofia_Lesova',
            image: require('../../storage/images/3.jpg')
        },
        {
            id: 0,
            name: 'Eva_Green',
            image: require('../../storage/images/4.jpg')
        },
        {
            id: 0,
            name: 'Alexander_Kameo',
            image: require('../../storage/images/5.jpg')
        },
        {
            id: 0,
            name: 'Andrew_Wolf',
            image: require('../../storage/images/6.jpg')
        },
        {
            id: 0,
            name: 'Andrew_Wolf',
            image: require('../../storage/images/1.jpg')
        }
    ]
    return (
        <ScrollView style={{
            paddingVertical: 20,
        }} horizontal={true} showsHorizontalScrollIndicator={false}>
            {
                storyInfo.map((data, index) => {
                    return (
                        <TouchableOpacity key={index}
                            onPress={() => navigation.push('Status', {
                                name: data.name,
                                image: data.image
                            })}
                        >
                            <View style={{
                                flexDirection: 'column',
                                paddingHorizontal: 8,
                                position: 'relative',
                            }}>
                                {
                                    data.id == 1 ? (
                                        <View style={{
                                            position: 'absolute',
                                            bottom: 8,
                                            right: 5,
                                            zIndex: 1
                                        }}>
                                            <Entypo name='circle-with-plus' style={{
                                                fontSize: 30,
                                                color: '#405de5',
                                                backgroundColor: 'white',
                                                borderRadius: 100
                                            }} />
                                        </View>
                                    ) : null
                                }
                                <View style={{
                                    width: 68,
                                    height: 68,
                                    backgroundColor: 'white',
                                    borderWidth: 1.8,
                                    borderRadius: 100,
                                    borderColor: '#c13584',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Image source={data.image} style={{
                                        resizeMode: 'cover',
                                        width: '92%',
                                        height: '92%',
                                        borderRadius: 100,
                                        backgroundColor: 'orange'
                                    }} />
                                </View>
                                <Text style={{
                                    textAlign: 'center',
                                    fontSize: 10,
                                    opacity: data.id == 0 ? 1 : 0.5
                                }}>
                                    {data.name}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default Stories;
