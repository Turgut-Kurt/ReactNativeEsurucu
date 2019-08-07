import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View ,Image} from 'react-native';
import PropTypes from 'prop-types';

export default class ButtonFooter extends Component {
  render() {
      const btnfooterbgColor = this.props.btnfooterbgColor;
      const btnfooterimgSource = this.props.btnfooterimgSource;
    return (
        <View style={styles(btnfooterbgColor).container}>
            <TouchableOpacity
                style={styles(null).touch}>
                <Image
                    source={btnfooterimgSource}
                    style={styles(null).img}
                />
            </TouchableOpacity>
        </View>
    );
  }
}
ButtonFooter.propTypes = {
    btnfooterbgColor: PropTypes.string.isRequired,
    btnfooterimgSource: PropTypes.number.isRequired,
};
const styles = (btnfooterbgColor) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: btnfooterbgColor
    },
    touch : {
        flex:1,
        alignItems: "center",
        justifyContent: "center",

    },
    img:{
        flex:1,
        width: 200,
        height: 200,
        resizeMode: 'center',
        marginTop:8,
        marginBottom:8
    }
});



