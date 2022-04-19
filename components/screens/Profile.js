import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ProfileBody, ProfileButtons } from '../screenComponents/ProfileBody';

const Profile = () => {
    return (
        <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white'
        }}>
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
        </View>
    );
}

const styles = StyleSheet.create({})

export default Profile;


