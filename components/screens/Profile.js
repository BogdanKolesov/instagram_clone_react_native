import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ProfileBody, ProfileButtons } from '../screenComponents/ProfileBody';
import Entypo from 'react-native-vector-icons/Entypo'
import BottomTabView from '../screenComponents/BottomTabView';


const Profile = () => {

    let circuls = []
    let numberOfCircles = 10

    for (let index = 0; index < numberOfCircles; index++) {
        circuls.push(
            <View key={index}>
                {index === 0 ? (
                    <TouchableOpacity style={{
                        width: 60,
                        height: 60,
                        borderRadius: 100,
                        borderWidth: 1,
                        opacity: 0.7,
                        marginHorizontal: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Entypo name='plus' style={{
                            fontSize: 40,
                            color: 'black'
                        }} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={{
                        width: 60,
                        height: 60,
                        borderRadius: 100,
                        borderColor: 'black',
                        opacity: 0.1,
                        marginHorizontal: 5,
                        backgroundColor: 'black'
                    }}>

                    </TouchableOpacity>
                )}
            </View>
        )
    }
    return (
        <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white'
        }}>
            <View>
                <ProfileBody
                    name='Alexander Lesov'
                    accountName='alexander_lesov'
                    profileImage={require('../../storage/images/7.png')}
                    followers={314}
                    following={102}
                    posts={36}
                />
                <ProfileButtons
                    id={0}
                    name='Alexander Lesov'
                    accountName='alexander_lesov'
                    profileImage={require('../../storage/images/7.png')}
                />
                <View>
                    <Text style={{
                        padding: 10,
                        letterSpacing: 1,
                        fontSize: 14
                    }}>
                        Sroty Highlights
                    </Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{
                            paddingVertical: 5,
                            paddingHorizontal: 10
                        }}>
                        {circuls}
                    </ScrollView>
                </View>
            </View>
            <BottomTabView />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Profile;


