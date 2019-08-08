import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

export default class ButtonContent extends Component {
    render() {
        const btntext = this.props.btntext;
        const btnbgColor = this.props.btnbgColor;
        const btntextcolor = this.props.btntextcolor;
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <TouchableOpacity
                        style={[styles.button, {backgroundColor: btnbgColor}]}>
                        <Text style={{color: btntextcolor, fontSize: 8,}}>{btntext}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 3}}></View>
            </View>
        );
    }
}
ButtonContent.propTypes = {
    btntext: PropTypes.string.isRequired,
    btnbgColor: PropTypes.string.isRequired,
    btntextcolor: PropTypes.string.isRequired
};
const styles = StyleSheet.create({
    button: {
        paddingVertical: 7,
        paddingHorizontal: 8,
        borderRadius: 13,
        alignItems: "center",
    },
    box: {
        flex: 5
    },
    container: {
        flex: 3,
        flexDirection: "row",
        paddingTop: 5,
    },
});