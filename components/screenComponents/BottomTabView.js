import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionic from 'react-native-vector-icons/Ionicons'

const BottomTabView = () => {

    let squares = []
    let numberOfSquares = 12

    for (let index = 0; index < numberOfSquares; index++) {
        squares.push(
            <View key={index} style={{
                paddingTop: 6
            }}>
                <View style={{
                    width: 130,
                    height: 150,
                    marginVertical: 2,
                    backgroundColor: 'black',
                    opacity: 0.1

                }}>

                </View>
            </View>
        )
    }

    const Posts = () => {
        return (
            <ScrollView showsVerticalScrollIndicator={false}
                style={{
                    width: '100%',
                    height: '100%'
                }}>
                <View style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    {squares}
                </View>
            </ScrollView>
        )
    }

    const Video = () => {
        return (
            <ScrollView showsVerticalScrollIndicator={false}
                style={{
                    width: '100%',
                    height: '100%'
                }}>
                <View style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    {squares}
                </View>
            </ScrollView>
        )
    }

    const Tags = () => {
        return (
            <ScrollView showsVerticalScrollIndicator={false}
                style={{
                    width: '100%',
                    height: '100%'
                }}>
                <View style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    {squares}
                </View>
            </ScrollView>
        )
    }

    const Tab = createMaterialTopTabNavigator()
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarIndicatorStyle: {
                    backgroundColor: 'black',
                    height: 1.5
                },
                tabBarIcon: ({ focused, color }) => {
                    let iconName;
                    if (route.name === 'Posts') {
                        iconName = focused ? 'ios-apps-sharp' : 'ios-apps-sharp'
                        color = focused ? 'black' : 'gray'
                    } else if (route.name === 'Video') {
                        iconName = focused ? 'ios-play-circle' : 'ios-play-circle-outline'
                        color = focused ? 'black' : 'gray'
                    } else if (route.name === 'Tags') {
                        iconName = focused ? 'ios-person' : 'ios-person-outline'
                        color = focused ? 'black' : 'gray'
                    }
                    return <Ionic name={iconName} color={color} size={22} />
                }
            })}>
            <Tab.Screen name='Posts' component={Posts} />
            <Tab.Screen name='Video' component={Video} />
            <Tab.Screen name='Tags' component={Tags} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({})

export default BottomTabView;
