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
        <View>
            {
                searchData.map((data, index) => {
                    return (
                        <>
                            {
                                data.id == 0 ? (
                                    <View>
                                        {
                                            data.images.map((imageData, imgIndex) => {
                                                return (
                                                    <TouchableOpacity key={imgIndex}>
                                                        <Image source={imageData} />
                                                    </TouchableOpacity>
                                                )
                                            })
                                        }
                                    </View>
                                ) : null
                            }
                        </>
                    )
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({})

export default SearchContent;
