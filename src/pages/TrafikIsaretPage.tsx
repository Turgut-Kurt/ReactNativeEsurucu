import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonFooter from '../component/ButtonFooter';
import HeadGradient from "../component/HeadGradient";
import HeadTop from "../component/HeadTop";
import HeadBodyText from "../component/HeadBodyText";
import HeadBodyImage2 from "../component/HeadBodyImage2";
import HeadBodyImage from "../component/HeadBodyImage";

export default class TrafikIsaretPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container1}>
                    <HeadGradient
                        colors={['#D6911B', '#D29222', '#C29C1B']}
                        borderColor={"#091111"}
                    />
                    <HeadTop
                        Middlewidth={65}
                        Middleheight={65}
                        MiddleimgSource={require('../assets/1x/e-suruculogo.png')}
                    />
                    <HeadBodyText
                        text={"TRAFİK İŞARETLERİ"}
                        fontSize={22}
                        textcolor={"white"}
                        locationX="center"
                        locationY="flex-start"
                        TextmarginTop={20}

                    />
                    <HeadBodyImage2
                        imgSource={require('../assets/1x/lamb.png')}
                        locationX="center"
                        locationY="flex-start"
                        width={200}
                        height={160}
                        marginLeft={0}
                        marginTop={10}
                    />
                </View>
                <View style={styles.content}>
                    <View style={styles.contentFlex}>

                    </View>
                    <View style={styles.contentFlex}>


                    </View>
                    <View style={styles.contentFlex}>

                    </View>
                    <View style={styles.contentFlex}>

                    </View>
                    <View style={styles.contentFlex}>

                        <View style={styles.ImageContent}></View>
                    </View>

                </View>
                <View style={styles.footer}>
                    <ButtonFooter
                        btnfooterimgSource={require('../assets/1x/facebook.png')}
                        btnfooterbgColor={"#016EDE"}
                    />
                    <ButtonFooter
                        btnfooterimgSource={require('../assets/1x/instagram.png')}
                        btnfooterbgColor={"#DC0AEA"}
                    />
                    <ButtonFooter
                        btnfooterimgSource={require('../assets/1x/whatsapp.png')}
                        btnfooterbgColor={"#21BF00"}
                    />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#EBEBEB",
    },
    container1: {
        flex: 36,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: null,
    },
    content: {
        flex: 55,
    },
    contentFlex: {
        flex: 11,
        flexDirection: "row",
    },
    footer: {
        flex: 9,
        flexDirection: "row",
    },
    ImageContent: {
        flex: 2,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingLeft: 10,
        backgroundColor: "#EBEBEB",
    },
    bold: {
        fontWeight: "bold",
        fontSize: 25,
    }
});