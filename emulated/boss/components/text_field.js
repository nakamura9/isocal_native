import React from 'react';
import {
    StyleSheet,
    Text, 
    View, 
    TextInput
} from 'react-native';

const styles = StyleSheet.create({
    label: {
        fontWeight: "200",
        fontSize: 16,
        padding: 5
    },
    container: {
        padding: 5,
        marginBottom: 10
    },
    input: {
        borderColor: 'steelblue',
        borderWidth: 2,
        padding: 5
    }
})

const TextField = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput 
                style={styles.input}
                value={props.value}
                onChangeText={props.handler}/>
        </View>
    )
}

export default TextField;