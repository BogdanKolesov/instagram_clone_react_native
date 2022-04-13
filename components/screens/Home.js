import React from 'react';
import { View, StyleSheet, Text, StatusBar, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Stories from '../screenComponents/Stories';
import Post from '../screenComponents/Post';


const Home = () => {
    return (
        <View style={{
            backgroundColor: 'white',
            height: '100%',
        }}>
            <StatusBar backgroundColor='white' barStyle='dark-content' animated={true} />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 15,
                alignItems: 'center'
            }}>
                <FontAwesome name='plus-square-o'
                    style={{
                        fontSize: 26
                    }}
                />
                <Text style={{
                    fontFamily: 'Lobster-Regular',
                    fontSize: 26,
                    fontWeight: '500'
                }}>Bogdanogram</Text>
                <Feather name='navigation' style={{
                    fontSize: 26
                }}
                />
            </View>
            <ScrollView style={{

            }}>
                <Stories />
                <Post />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Home;
