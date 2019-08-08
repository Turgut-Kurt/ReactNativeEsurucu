import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RightIcon from '../component/RightIcon';
import CenterIcon from '../component/CenterIcon';
import HeadBodyIcon from '../component/HeadBodyIcon';
export default class HeadGradient extends Component {
  render() {
    return (
        <View style={styles.container}>
            <LinearGradient
                start={{x: 0, y: -1}} end={{x: 1, y: -1}} colors={['#065CAB', '#0771E7', '#25b3ff']}
                style={styles.headView}
            >
            </LinearGradient>
            <View style={styles.header}>

                <View style={styles.topheader}>

                    <CenterIcon
                        imgSource={require('../assets/1x/e-surucu3.png')}
                        locationX="flex-start"
                        locationY="flex-start"
                    />
                    <View style={styles.freeSpace}><Text></Text></View>
                    <CenterIcon
                        imgSource={require('../assets/1x/e-surucu3.png')}
                        locationX="center"
                        locationY="flex-start"
                    />
                    <View style={styles.freeSpace}><Text> </Text></View>
                    <RightIcon
                        imgSource={require('../assets/1x/profile_human.png')}
                        locationX="flex-end"
                        locationY="center"

                    />
                    <RightIcon
                        imgSource={require('../assets/1x/turn-notifications-on-button.png')}
                        locationX="flex-start"
                        locationY="center"

                    />

                </View>
                <HeadBodyIcon
                    imgSource={require('../assets/1x/ozgunes.png')}
                    locationX="center"
                    locationY="flex-start"
                />

            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 35,
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: null
    },
    headView: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: "180%",
        height: "180%",
        borderWidth: 15,
        borderColor: '#00296E',
        borderBottomRightRadius: 400,
        borderBottomLeftRadius: 400,
        top: "-80%",
        /*transform: [{
            scaleX: 1,
            //rotate : "90deg"
        }],*/
    },
    topheader: {

        flex: 8,
        flexDirection: "row"
    },
    header: {
        flex: 35,

        flexDirection: "column",
    },
    freeSpace: {

        flex: 2,
    },


});