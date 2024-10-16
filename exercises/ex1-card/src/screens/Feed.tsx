// src/screens/Feed.tsx
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Card from '../components/Card';

const Feed = () => {
    return (
        <ScrollView contentContainerStyle={styles.feed}>
            <Card
                username="John Doe"
                userImage="https://robohash.org/john"
                postText="This is my first post!"
                postImage="https://picsum.photos/200"
            />
            <Card
                username="Jane Smith"
                userImage="https://robohash.org/jane"
                postText="Loving this app!"
                postImage="https://picsum.photos/200"
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
