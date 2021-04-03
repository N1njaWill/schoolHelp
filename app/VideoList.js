import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
import VideoPlay from './VideoPlay';
import color from './color';


function VideoList({v1, v2, v3, v4, v5, v6, v7, v8}) {
    return (
        <SafeAreaView style={{backgroundColor: color.c1}}>
          <Text style={styles.title}>App Name</Text>
        <ScrollView  >
          <Text style={styles.text}>Physique:</Text>
          <VideoPlay sorce={v1}/>
          <VideoPlay sorce={v2}/>
          <Text style={styles.text}>Maths:</Text>
          <VideoPlay sorce={v3}/>
          <VideoPlay sorce={v4}/>
          <Text style={styles.text}>Anglais:</Text>
          <VideoPlay sorce={v5}/>
          <VideoPlay sorce={v6}/>
          <Text style={styles.text}>I2D:</Text>
          <VideoPlay sorce={v7}/>
          <VideoPlay sorce={v8}/>
        </ScrollView>
        </SafeAreaView> 
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 35,
        paddingBottom: 10,
        alignItems: 'center',
        backgroundColor: color.c1,
        paddingLeft: 10,
        fontWeight: 'bold'
      },
    title:{
      fontSize: 45,
      paddingBottom: 8,
      alignSelf: 'center',
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      color: '#F79256',
      paddingBottom: 20
    }
})
    

export default VideoList;