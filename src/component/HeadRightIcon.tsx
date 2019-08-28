import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import PropTypes from 'prop-types';


export default class HeadRightIcon extends Component {
    private props: any;

    render() {
        const locationX = this.props.locationX;
        const locationY = this.props.locationY;
        const imgSource = this.props.imgSource;
        const width = this.props.Rightwidth;
        const height = this.props.Rightheight;
        return (

            < TouchableOpacity
                style={styles(null,null,null,null).container}>

                <View style={styles(locationX, locationY,null,null).container}>
                    <Image
                        source={imgSource}
                        style={styles(null, null,width,height).img}

                    />
                </View>
            </TouchableOpacity>
        );
    }
}
HeadRightIcon.propTypes = {
    imgSource: PropTypes.number.isRequired,
    locationX: PropTypes.string.isRequired,
    locationY: PropTypes.string.isRequired,
    Rightwidth : PropTypes.number.isRequired,
    Rightheight : PropTypes.number.isRequired,
};
const styles = (locationX, locationY,width,height) => StyleSheet.create({
    container: {

        flex: 1,
        alignItems: locationX,
        justifyContent: locationY
    },
    img: {
        width: width,
        height: height,
        resizeMode: 'center',
    }
});