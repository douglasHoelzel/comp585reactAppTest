import React, {Component} from 'react';
import MapPage from './components/MapPage';
import HomePage from './components/HomePage';

import {
  Platform,
  StyleSheet,
  Text,
  Image,
  Button,
  AppRegistry,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';


export default class myapp extends Component{
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image1}
                    source={require('./images/chickenImage.png')}/>
                <Image style={styles.image2}
                    source={require('./images/chickenBusLogo1.png')}/>
            </View>

            <View style={styles.userNameContainer}>
            <TextInput
                style={{height: 40,
                    backgroundColor: '#FCF3CF',
                    borderRadius: 6,}}
                placeholder="User Name"
                onChangeText={(text) => this.setState({text})}
            />
            </View>
            <View style={styles.userNameContainer}>
            <TextInput
                style={{height: 40,
                    backgroundColor: '#FCF3CF',
                    borderRadius: 6,}}
                secureTextEntry={true}
                placeholder="Password"
                onChangeText={(text) => this.setState({text})}
            />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.buttonCell}
                    onPress={this.onPress}
                >
                <Text style={styles.buttonText}> Sign In </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.buttonCell}
                    onPress={this.onPress}
                >
                <Text style={styles.buttonText}> Sign Up </Text>
                </TouchableOpacity>
            </View>
      </View>

      );
    }


    onPress = () => {
        console.log("Start Button Pressed");
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7EB7A',
},
imageContainer:{
    paddingBottom: 60,
    justifyContent: 'center',
    alignItems: 'center',
},
buttonContainer:{
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
},
userNameContainer:{
    width: 300,
    paddingTop: 10,
},
buttonCell:{
   alignItems: 'center',
   padding: 10,
   backgroundColor: '#3498DB',
   borderRadius: 20,
   width: 200,
},
buttonText:{
    color: '#fff',
    fontWeight: 'bold',
},
image1:{
    width: 150,
    height: 150,
},
image2:{
      width: 350,
      height: 100,
  },
});
AppRegistry.registerComponent('testReactApp', () => myapp);
