interface DrawerButtonProps {
    drawersize : number,
    drawername : string,
    drawercolor : string,
    drawerlocationX : string,
    drawerlocationY : string,
}
import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const DrawerButton_new = (props:DrawerButtonProps)  => {
    return(
        <TouchableOpacity
            style={styles(props.drawerlocationX,props.drawerlocationY).container}>
            <Icon
                size={props.drawersize}
                name={props.drawername}
                color={props.drawercolor}
            />
        </TouchableOpacity>
    )
};

const styles = (locationX,locationY) => StyleSheet.create({
    container: {
        flex: 1,
        alignItems: locationX,
        justifyContent: locationY,
    },
});

export default DrawerButton_new;