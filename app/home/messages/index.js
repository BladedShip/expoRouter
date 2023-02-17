import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import { Link } from 'expo-router';

const messages = () => {
    return (
        <View>
            <Text>index</Text>
            <Link href="home/messages/messageRoom" style={styles.text}>Default Messages</Link>
            <Link href="home/messages/Mayank" style={styles.text}>Messages for Mayank</Link>
            <Link href="home/messages/Dhanalekshmi" style={styles.text}>Messages for Dhanalekshmi</Link>
            <Link href="home/messages/Adithyan" style={styles.text}>Messages for Adithyan</Link>
        </View>
    )
}

export default messages;

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        margin: 10,
    }
})