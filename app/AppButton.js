import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import color from './color';



function AppButton({title, onPress, color }) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: color}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '95%', 
        marginVertical:  10,
    },
    text: {
        color: color.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
})

export default AppButton;