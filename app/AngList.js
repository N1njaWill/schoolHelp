import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
import VideoPlay from './VideoPlay';
import color from './color';


function AngList({v1, v2, v3, v4, v5, v6, v7, v8}) {
    return (
        <SafeAreaView style={{backgroundColor: color.c1}}>
        <ScrollView style={{paddingTop: 10}} >
          <VideoPlay sorce={v1}/>
          <VideoPlay sorce={v2}/>
          <VideoPlay sorce={v2}/>
          <VideoPlay sorce={v2}/>
          <VideoPlay sorce={v2}/>
          <VideoPlay sorce={v2}/>
        </ScrollView>
        </SafeAreaView> 
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 35,
        paddingBottom: 10,
        alignSelf: 'center',
        backgroundColor: color.c1,
        paddingLeft: 10,
        fontWeight: 'bold'
      }
})
    

export default AngList;