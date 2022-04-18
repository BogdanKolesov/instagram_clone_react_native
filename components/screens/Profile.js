import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ProfileBody } from '../screenComponents/ProfileBody';

const Profile = () => {
    return (
        <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white'
        }}>
            <ProfileBody
                name='Alexander Lesov'
                accounName='Alexander_Lesov'
                profileImage={require('../../storage/images/7.png')}
                followers={314}
                following={102}
                posts={36}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Profile;
