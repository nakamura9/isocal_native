import React from 'react';;
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


const AppNavigator = createStackNavigator({
    Login: {screen: LoginScreen},
    Home: {screen: HomeScreen},
});

const App = createAppContainer(AppNavigator);
export default App;