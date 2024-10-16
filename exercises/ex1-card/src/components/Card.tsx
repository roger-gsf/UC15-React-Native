// src/components/Card.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { CardProps } from '../types/CardTypes';
import Feather from '@expo/vector-icons/Feather';

const Card = ({ username, userImage, postText, postImage }: CardProps) => {
    return (
        <View style={styles.card}>
            {/* Header */}
            <View style={styles.header}>
                <Image source={{ uri: userImage }} style={styles.userImage} />
                <Text style={styles.username}>{username}</Text>
            </View>

            {/* Body */}
            <View style={styles.body}>
                <Text style={styles.postText}>{postText}</Text>
                <Image source={{ uri: postImage }} style={styles.postImage} />
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Feather name="heart" size={24} color="#f00" />
                <Feather name="message-circle" size={24} color="#252525" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        marginVertical: 10,
        borderRadius: 8,
        padding: 10,
        width: '90%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    body: {
        marginBottom: 10,
    },
    postText: {
        fontSize: 16,
        marginBottom: 10,
    },
    postImage: {
        width: '100%',
        height: 150,
        borderRadius: 8,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default Card;
