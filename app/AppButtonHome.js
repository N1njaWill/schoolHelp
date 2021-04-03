import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import color from './color';



function AppButtonHome({title, onPress, color }) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: color}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 320,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '95%',
        height: 50, 
        marginVertical:  10,
         
    },
    text: {
        color: color.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
})

export default AppButtonHome;