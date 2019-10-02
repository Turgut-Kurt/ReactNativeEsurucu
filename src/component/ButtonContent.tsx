import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

export default class ButtonContent extends Component {
    render() {

        const btntext = this.props.btntext;
        const btnbgColor = this.props.btnbgColor;
        const btntextcolor = this.props.btntextcolor;
        const func = this.props.func;

        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <TouchableOpacity
                        onPress={func}
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
        borderRadius: 13,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 7,
        paddingVertical: 2,
    },
    box: {
        flex: 5,
        alignItems: "flex-start",
        justifyContent: "center",
    },
    container: {
        marginTop: 5,
        flex: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start"
    },
});
