import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeadGradient from "./HeadGradient";
import HeadBodyImage from "./HeadBodyImage";
import HeadTop from "./HeadTop";
import HeadBodyText from "./HeadBodyText";

export default class MainHeaderr extends Component {
    render() {
        return (

            <View style={styles.container}>
                <HeadGradient/>
                <HeadTop/>
                <HeadBodyImage
                    imgSource={require('../assets/1x/ozgunes.png')}
                    locationX="center"
                    locationY="center"/>
                <HeadBodyText/>

            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 36,
        flexDirection: "column",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: null,
    },


});