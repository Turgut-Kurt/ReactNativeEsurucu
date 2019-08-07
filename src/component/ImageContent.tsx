import React, {Component} from 'react';
import {StyleSheet,View,Image} from 'react-native';
import PropTypes from 'prop-types';
export default class ImageContent extends Component {
    render() {
        const imgSource = this.props.imgSource;
        const circlebg= this.props.circlebg;
        return (
            <View style={styles(null).container}>
                <View style={styles(circlebg).circle}>
                    <Image
                        source={imgSource}
                        style={styles(null).img}
                    />
                </View>
            </View>
        );
    }
}
ImageContent.propTypes = {
    imgSource : PropTypes.number.isRequired,
    circlebg :PropTypes.string.isRequired,
};
const styles = (circlebg) => StyleSheet.create({
    img: {

        width: 63,
        height: 60,
        resizeMode: 'center',
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        backgroundColor: circlebg,

    },
    container: {
        flex: 2,
        paddingTop:10
    },
});