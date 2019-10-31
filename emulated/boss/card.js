import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Card = (props) =>{
    return(
        <View style={styles.card}>
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Title</Text>
                <Text style={styles.cardContent}>Content</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    'card': {
        borderStyle: 'solid',
        borderColor: '#000',
        borderRadius: 25,
        backgroundColor: "steelblue",
        margin: 10
    },
    'cardBody': {
        'padding': 18,
    },
    cardTitle: {
        fontSize: 36,
        fontFamily: "serif",
        fontWeight: "200",
        color: "white"
    },
    cardText: {
        fontSize: 18,
        fontWeight: "400"
    }
})

export default Card;