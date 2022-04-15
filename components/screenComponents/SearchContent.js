import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const SearchContent = () => {

    const searchData = [
        {
            id: 0,
            images: [
                require('../../storage/images/1.jpg'),
                require('../../storage/images/2.jpg'),
                require('../../storage/images/3.jpg'),
                require('../../storage/images/4.jpg'),
                require('../../storage/images/5.jpg'),
                require('../../storage/images/2.jpg'),

            ]
        },
        {
            id: 1,
            images: [
                require('../../storage/images/6.jpg'),
                require('../../storage/images/5.jpg'),
                require('../../storage/images/4.jpg'),
                require('../../storage/images/3.jpg'),
                require('../../storage/images/2.jpg'),
                require('../../storage/images/5.jpg'),


            ]
        },
        {
            id: 2,
            images: [
                require('../../storage/images/1.jpg'),
                require('../../storage/images/2.jpg'),
                require('../../storage/images/4.jpg'),
                require('../../storage/images/5.jpg'),
                require('../../storage/images/6.jpg'),
                require('../../storage/images/3.jpg'),
            ]
        }
    ]

    return (
        <View style={{
            paddingHorizontal: 5
        }}>
            {
                searchData.map((data, index) => {
                    return (
                        <View key={index} style={{ width: '100%' }}>
                            {
                                data.id == 0 ? (
                                    <View style={{
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',
                                        justifyContent: 'space-between',
                                        width: '100%'
                                    }}>
                                        {
                                            data.images.map((imageData, imgIndex) => {
                                                return (
                                                    <TouchableOpacity style={{
                                                        paddingBottom: 2,
                                                        width: '32%'
                                                    }} key={imgIndex}>
                                                        <Image style={{
                                                            width: '100%',
                                                            height: 150
                                                        }} source={imageData} />
                                                    </TouchableOpacity>
                                                )
                                            })
                                        }
                                    </View>
                                ) : null}
                            {
                                data.id === 1 ? (

                                    <View style={{
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',
                                        justifyContent: 'space-between',
                                        width: '100%'

                                    }}>
                                        {
                                            data.images.map((imageData, imgIndex) => {
                                                return (
                                                    <TouchableOpacity style={{
                                                        paddingBottom: 2,
                                                        width: '32%'

                                                    }} key={imgIndex}>
                                                        <Image style={{
                                                            width: '100%',
                                                            height: 150,
                                                        }} source={imageData} />
                                                    </TouchableOpacity>
                                                )
                                            })
                                        }
                                    </View>
                                ) : null
                            }
                            {
                                data.id === 2 ? (

                                    <View style={{
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',
                                        justifyContent: 'space-between',
                                        width: '100%'

                                    }}>
                                        {
                                            data.images.map((imageData, imgIndex) => {
                                                return (
                                                    <TouchableOpacity style={{
                                                        paddingBottom: 2,
                                                        width: '32%'

                                                    }} key={imgIndex}>
                                                        <Image style={{
                                                            width: '100%',
                                                            height: 150,
                                                        }} source={imageData} />
                                                    </TouchableOpacity>
                                                )
                                            })
                                        }
                                    </View>
                                ) : null
                            }
                        </View>

                    )
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({})

export default SearchContent;
