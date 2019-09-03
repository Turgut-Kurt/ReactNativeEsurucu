import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import PropTypes from 'prop-types';


export default class HeadBodyImage2 extends Component {
    render() {
        const locationX = this.props.locationX;
        const locationY = this.props.locationY;
        const imgSource = this.props.imgSource;
        const width = this.props.width;
        const height = this.props.height;
        const marginLeft = this.props.marginLeft;
        const marginTop = this.props.marginTop;
        return (
            <View style={styles(locationX, locationY,null,null,null,null).main}>
                <Image
                    source={imgSource}
                    style={styles(null, null,width,height,marginLeft,marginTop).img}

                />
            </View>
        );
    }
}
HeadBodyImage2.propTypes = {
    imgSource: PropTypes.number.isRequired,
    locationX: PropTypes.string.isRequired,
    locationY: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    marginLeft: PropTypes.number.isRequired,
    marginTop:PropTypes.number.isRequired,
};
const styles = (locationX, locationY,width,height,marginLeft,marginTop) => StyleSheet.create({
    main: {
        flex: 20,
        flexDirection: "column",
        alignItems: locationX,
        justifyContent: locationY,
        width: "100%",
    },
    img: {
        marginTop:marginTop,
        width: width,
        height: height,
        resizeMode: "stretch",
        marginLeft:marginLeft,

    },

});