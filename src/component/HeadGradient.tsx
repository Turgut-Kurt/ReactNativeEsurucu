import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default class HeadGradient extends Component {
  render() {
    return (
        <View style={styles.container}>
            <LinearGradient
                start={{x: 0, y: -1}} end={{x: 1, y: -1}} colors={['#065CAB', '#0771E7', '#25b3ff']}
                style={styles.headView}
            >
            </LinearGradient>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "red",
        backgroundColor: "#ffffff"
    },
    headView: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: "200%",
        height: "60%",
        borderWidth: 10,
        borderColor: '#00296E',
        borderBottomRightRadius: 400,
        borderBottomLeftRadius: 400,
        top: "-30%",
        /*transform: [{
            scaleX: 1,
            //rotate : "90deg"
        }],*/
    },


});