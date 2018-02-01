import { AppRegistry } from 'react-native';
import MapPage from './components/MapPage';
import HomePage from './components/HomePage';

export default class myapp extends HomePage{
    render(){
        return(
            <View>
            </View>
        );
    }
}
AppRegistry.registerComponent('testReactApp', () => myapp);
AppRegistry.registerComponent('testReactApp', () => MapPage);
AppRegistry.registerComponent('testReactApp', () => HomePage);
