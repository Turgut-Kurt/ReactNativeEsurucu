import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DetailPage extends Component {
    static navigationOptions = {
        title: 'Detail',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Detail
                </Text>
            </View>
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