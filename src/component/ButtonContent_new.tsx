interface ButtonContentProps {
    btntext : string;
    btnbgColor : string;
    btntextcolor : string;
    func : () => {};
}
import React from 'react';
import {StyleSheet, View, TouchableOpacity,Text} from 'react-native';
const ButtonContent_new = (props:ButtonContentProps)  => {
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <TouchableOpacity
                    onPress={props.func}
                    style={[styles.button, {backgroundColor: props.btnbgColor}]}>
                    <Text style={{color: props.btntextcolor, fontSize: 8,}}>{props.btntext}</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 3}}></View>
        </View>
    )
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
export default ButtonContent_new;