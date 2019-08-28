import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';
import ButtonContent from './ButtonContent';
import TextContent from './TextContent';
import ImageContent from './ImageContent';
export default class Content extends Component {
    render() {
        const imgSource = this.props.imgSource;
        const text= this.props.text;
        const btntext = this.props.btntext;
        const btnbgColor = this.props.btnbgColor;
        const btntextcolor = this.props.btntextcolor;
        const circlebg= this.props.circlebg;
        return (
            <View style={styles.ImageContent}>
                <ImageContent
                    imgSource={imgSource}
                    circlebg={circlebg}
                />
                <View style={styles.rightbuttonandtextcontent}>
                    <TextContent
                        text={text}

                    />
                    <ButtonContent
                        btntext={btntext}
                        btnbgColor={btnbgColor}
                        btntextcolor={btntextcolor}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    ImageContent: {
        flex: 2,
        flexDirection: "row",
        backgroundColor: '#EBEBEB',
        alignItems: "flex-start",
        justifyContent: "center",
        paddingLeft: 10,

    },
    rightbuttonandtextcontent: {
        flex: 3,
        paddingTop: 5,

    },
});