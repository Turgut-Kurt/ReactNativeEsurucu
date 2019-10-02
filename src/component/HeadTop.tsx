import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DrawerButton from "./DrawerButton";
import HeadMiddleImage from "./HeadMiddleImage";
import HeadRightIcon from "./HeadRightIcon";

export default class HeadTop extends Component {
    render() {
        const Middlewidth = this.props.Middlewidth;
        const Middleheight = this.props.Middleheight;
        const MiddleimgSource = this.props.MiddleimgSource;
        return (
            <View style={styles.topheader}>
                <DrawerButton
                    drawersize={36}
                    drawername={"ios-menu"}
                    drawercolor={"white"}
                    drawerlocationX="flex-end"
                    drawerlocationY="center"
                />
                <View style={styles.freeSpace1}></View>
                <View style={styles.freeSpace2}><Text></Text></View>
                <HeadMiddleImage
                    MiddleimgSource={MiddleimgSource}
                    MiddlelocationX="center"
                    MiddlelocationY="flex-start"
                    Middlewidth={Middlewidth}
                    Middleheight={Middleheight}
                />
                <View style={styles.freeSpace2}><Text> </Text></View>
                <HeadRightIcon
                    imgSource={require('../assets/1x/profile_human.png')}
                    locationX="center"
                    locationY="center"
                    Rightwidth={30}
                    Rightheight={30}
                />
                <HeadRightIcon
                    imgSource={require('../assets/1x/turn-notifications-on-button.png')}
                    locationX="center"
                    locationY="center"
                    Rightwidth={30}
                    Rightheight={30}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topheader: {
        flex: 8,
        flexDirection: "row",
    },
    freeSpace2: {
        flex: 2,
    },
    freeSpace1: {
        flex: 1,
    },
});
