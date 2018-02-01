import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
} from 'react-native';

export default class MapPage extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>This is MapPage Component</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0681D4',
},
text: {
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold',
  color: '#fff',
}

});

AppRegistry.registerComponent('MapPage', () => MapPage);
