import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppButton from './app/AppButton';
import PhyList from './app/PhyList';
import AngList from './app/AngList';
import I2DList from './app/I2DList';
import color from './app/color';
import AppButtonHome from './app/AppButtonHome';




function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 20,}}>
      <Image
      style={styles.image}
      source={require('./assets/back.jpeg')}
    />
      <AppButtonHome
        title="1ère STI2D"
        onPress={() => navigation.navigate('premSTI')}
        color={'#cc5500'}
      />
    </View>
  );
}

function premSTI({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 20, backgroundColor: color.c1 }}>
      <AppButton
        title="Physique"
        onPress={() => navigation.navigate('Physique')}
        color={color.c2}
      />
      <AppButton
        title="Anglais"
        onPress={() => navigation.navigate('Anglais')}
        color={color.c2}
      />
      <AppButton
        title="I2D"
        onPress={() => navigation.navigate('I2D')}
        color={color.c2}
      />
    </View>
  );
}
function Phy({ navigation }) {
  return (
    <PhyList 
      v1={{uri: "https://schoolhelp543.s3.eu-west-3.amazonaws.com/Physique+1.mp4"}}
      v2={{uri: "https://schoolhelp543.s3.eu-west-3.amazonaws.com/Physique+2.mp4"}}
      v3={{uri: "https://schoolhelp543.s3.eu-west-3.amazonaws.com/Physique+3.mp4"}}
      v4={{uri: "https://schoolhelp543.s3.eu-west-3.amazonaws.com/Physique+4.mp4"}}/>
  );
}

function Ang({ navigation }) {
  return (
    <AngList v1={{uri: "https://schoolhelp543.s3.eu-west-3.amazonaws.com/film.mp4"}}/>
  );
}

function I2({ navigation }) {
  return (
    <I2DList v1={{uri: "https://schoolhelp543.s3.eu-west-3.amazonaws.com/film.mp4"}}/>
  );
}


const Stack = createStackNavigator();

function MainLayout() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name=" " component={Home} options={{
          
          headerTransparent: 'true',
          headerStyle: {
            backgroundColor: color.white,
            
          },
          headerTintColor: color.c2,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 40,
            paddingBottom: 60
            
          },
        }}/>
        <Stack.Screen name="premSTI" component={premSTI} options={{
          title: '1ère STI2D',
          headerStyle: {
            backgroundColor: color.c1,
          },
          headerTintColor: color.c2,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 40,
            paddingBottom: 60
            
          },
        }}/>
        <Stack.Screen name="Physique" component={Phy} options={{
          title: 'Physique-Chimie',
          headerStyle: {
            backgroundColor: color.c1,
          },
          headerTintColor: color.c2,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
            paddingBottom: 50
            
          },
        }}/>
        <Stack.Screen name="Anglais" component={Ang} options={{
          title: 'Anglais',
          headerStyle: {
            backgroundColor: color.c1,
          },
          headerTintColor: color.c2,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
            paddingBottom: 50
            
          },
        }}/>
        <Stack.Screen name="I2D" component={I2} options={{
          title: 'I2D',
          headerStyle: {
            backgroundColor: color.c1,
          },
          headerTintColor: color.c2,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
            paddingBottom: 50
            
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  image:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 1,
    width: '100%',
    height: 1000
  }
})  

export default MainLayout;
