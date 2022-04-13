import React from 'react';
import { View, StyleSheet } from 'react-native';

const Post = () => {

    const postInfo = [
        {
            postTitle: 'mr Navalny',
            postPersonImage: require('../../storage/images/1.jpg'),
            postImage: require('../../storage/images/2.jpg'),
            likes: 131,
            isLiked: false
        }
    ]

    return (
        <View>
            {
                postInfo.map((data, index) => {
                    const [like, setLike] = useState(data.isLiked);
                    return (

                    )
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({})

export default Post;
