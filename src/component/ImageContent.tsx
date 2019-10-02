import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import PropTypes from 'prop-types';

export default class ImageContent extends Component {
    render() {
        const locationX = this.props.ImagelocationX;
        const locationY = this.props.ImagelocationY;
        const width = this.props.Imgwidth;
        const height = this.props.Imgheight;
        const imgSource = this.props.imgSource;
        const circlebg = this.props.circlebg;
        const marginTop = this.props.ImageMarginTop;
        const marginLeft = this.props.ImageMarginLeft;
        return (
            <View style={styles(null, null, null, null, null,null,null).container}>
                <View style={styles(circlebg, null, null, locationX, locationY,null,null).circle}>
                    <Image
                        source={imgSource}
                        style={styles(null, width, height, null, null,marginTop,marginLeft).img}
                    />
                </View>
            </View>
        );
    }
}
ImageContent.propTypes = {
    imgSource: PropTypes.number.isRequired,
    circlebg: PropTypes.string.isRequired,
    Imgwidth: PropTypes.number.isRequired,
    Imgheight: PropTypes.number.isRequired,
    ImagelocationX: PropTypes.string.isRequired,
    ImagelocationY: PropTypes.string.isRequired,
    ImageMarginTop: PropTypes.number.isRequired,
    ImageMarginLeft: PropTypes.number.isRequired,
};
const styles = (circlebg, width, height, locationX, locationY,marginTop,marginLeft) => StyleSheet.create({
    img: {
        marginTop: marginTop,
        marginLeft:marginLeft,
        width: width,
        height: height,
        resizeMode: 'center',
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: locationX,
        justifyContent: locationY,
        backgroundColor: circlebg,

    },
    container: {
        flex: 2,
        paddingTop: 10
    },
});
