import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class DrawerButton extends Component {

    render() {
        return (
            <TouchableOpacity
                style={styles.container}>

                <Icon
                    size={36}
                    name="ios-menu"
                    color={"white"}
                />
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container: {

        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",

    },

});
