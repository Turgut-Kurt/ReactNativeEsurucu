import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {createStackNavigator, createAppContainer,createDrawerNavigator} from 'react-navigation'; //react navigation imp ettiğimiz yer

import HomePage from './src/pages/HomePage';
import DetailPage from './src/pages/DetailPage';
import MainPage from './src/pages/MainPage';




export default class App extends Component {
    render() {
        return (
            <AppContainer/>
        );
    }
}
const styles=StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#F5FCFF'
    }
});

const AppNavigator = createStackNavigator({
    Home : {
        screen : HomePage
    },
    Detail : {
        screen : DetailPage
    },
    MainPage : {
        screen : MainPage
    }
},{
    initialRouteName : 'MainPage',
    headerMode: "none"
});
const AppContainer =createAppContainer(AppNavigator);
