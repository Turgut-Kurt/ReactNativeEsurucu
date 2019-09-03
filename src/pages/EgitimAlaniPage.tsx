import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeadGradient_new from "../component/HeadGradient_new";
import HeadTop_new from "../component/HeadTop_new";
import HeadBodyText_new from "../component/HeadBodyText_new";
import HeadBodyImage2_new from "../component/HeadBodyImage2_new";
import ButtonFooter_new from "../component/ButtonFooter_new";

export default class EgitimAlaniPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container1}>
                    <HeadGradient_new
                        colors={['#FEA001', '#FFA102', '#FAA604']}
                        borderColor={"#150B04"}
                    />
                    <HeadTop_new
                        Middlewidth={65}
                        Middleheight={65}
                        MiddleimgSource={require('../assets/1x/e-suruculogo.png')}
                    />
                    <HeadBodyText_new
                        text={"EĞİTİM ALANI"}
                        fontSize={22}
                        textcolor={"white"}
                        locationX="center"
                        locationY="flex-start"
                        TextmarginTop={20}
                    />
                    <HeadBodyImage2_new
                        imgSource={require('../assets/1x/path.png')}
                        locationX="center"
                        locationY="flex-start"
                        width={150}
                        height={140}
                        marginLeft={10}
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
                    <ButtonFooter_new
                        btnfooterimgSource={require('../assets/1x/facebook.png')}
                        btnfooterbgColor={"#016EDE"}
                    />
                    <ButtonFooter_new
                        btnfooterimgSource={require('../assets/1x/instagram.png')}
                        btnfooterbgColor={"#DC0AEA"}
                    />
                    <ButtonFooter_new
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