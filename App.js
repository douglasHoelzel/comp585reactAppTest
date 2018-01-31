/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  Button,
  View
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      <Image style={styles.image}
        source={require('./images/chickenBusLogo1.png')}/>
            <Button style={styles.startButton}
                onPress={() => {
                      console.log('Start Button Pressed');
                }}
                title="Start"
                color="#3498DB"
                accessibilityLabel="Learn more about this purple button"
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD79B',
  },
  image:{
      width: 300,
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
