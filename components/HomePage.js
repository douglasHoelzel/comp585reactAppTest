import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  Button,
  AppRegistry,
  View
} from 'react-native';

export default class HomePage extends Component{
    render() {
      return (
        <View style={styles.container}>
        <Image style={styles.image}
         source={require('../images/chickenBusLogo1.png')}/>

              <View style={styles.container2}>
              <Button style={styles.startButton}
                  onPress={() => {
                        console.log('Start Button Pressed');
                  }}
                  title="Start"
                  color="#fff"
                  accessibilityLabel="Learn more about this purple button"
              />
              </View>
         </View>
      );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
},
container2:{
    backgroundColor: '#2D91D4',
    borderRadius: 5,
    width: 200,
    height: 40,
},
  image:{
      width: 350,
      height: 100,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#191919',
    fontWeight: 'bold',
  },
});

AppRegistry.registerComponent('HomePage', () => HomePage);
