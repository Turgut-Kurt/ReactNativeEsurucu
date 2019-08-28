import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import HeadTop from "./HeadTop";


export default class HeadGradient extends Component {


    render() {
        const colors = this.props.colors;
        const borderColor = this.props.borderColor;
        return (

            <LinearGradient
                start={{x: 0, y: -1}} end={{x: 1, y: -1}}
                colors={colors}
                style={styles(borderColor).headView}
                locations={[0,0.5,0.8]}
            >
            </LinearGradient>


        );
    }
}

const styles = (borderColor) => StyleSheet.create({
    headView: {
        position: "absolute",
        width: "210%",
        height: "210%",
        borderWidth: 15,
        borderColor: borderColor,
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
        top: "-110%",
    },


});