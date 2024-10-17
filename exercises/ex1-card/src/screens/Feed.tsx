import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Card from '../components/Card';

const Feed = () => {
    return (
        <ScrollView contentContainerStyle={styles.feed}>
            <Card
                username="Michael Jackson"
                userImage="https://robohash.org/michael"
                postText="This is my first post!"
                postImage="https://picsum.photos/100"
            />
            <Card
                username="Leon Kennedy"
                userImage="https://robohash.org/leon"
                postText="Loving this app!"
                postImage="https://picsum.photos/101"
            />
            <Card
                username="Ethan Winters"
                userImage="https://robohash.org/ethan"
                postText="This is my first post!"
                postImage="https://picsum.photos/102"
            />
            <Card
                username="Jane Foster"
                userImage="https://robohash.org/jane"
                postText="This is my first post!"
                postImage="https://picsum.photos/103"
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    feed: {
        alignItems: 'center',
        paddingVertical: 20,
    },
});

export default Feed;
