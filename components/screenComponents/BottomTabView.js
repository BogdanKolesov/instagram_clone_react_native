import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTabView = () => {
    const Posts = () => {
        return (
            <View>
                <Text>
                    Post
                </Text>
            </View>
        )
    }

    const Video = () => {
        return (
            <View>
                <Text>
                    Video
                </Text>
            </View>
        )
    }

    const Tags = () => {
        return (
            <View>
                <Text>
                    Tags
                </Text>
            </View>
        )
    }

    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator>
            <Tab.Screen name='Posts' component={Posts} />
            <Tab.Screen name='Video' component={Video} />
            <Tab.Screen name='Tags' component={Tags} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({})

export default BottomTabView;
