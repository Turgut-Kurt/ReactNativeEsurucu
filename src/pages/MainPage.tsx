import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Content from '../component/Content';
import ButtonFooter from '../component/ButtonFooter';
import LoadingPage from './LoadingPage';
import HeadGradient from "../component/HeadGradient";
import HeadTop from "../component/HeadTop";
import HeadBodyImage from "../component/HeadBodyImage";
import HeadBodyText from "../component/HeadBodyText";
import ImageContent from "../component/ImageContent";


export default class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {isLoading: true}
    }

    performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
            setTimeout(
                () => {
                    resolve('result')
                },
                200
            )
        );
    };

    async componentDidMount() {

        const data = await this.performTimeConsumingTask();

        if (data !== null) {
            this.setState({isLoading: false});
        }
    }

    render() {
        if (this.state.isLoading) {
            return <LoadingPage/>;
        }
        return (
            <View style={styles.container}>

                <View style={styles.container1}>
                    <HeadGradient
                        colors={['#065CAB', '#0771E7', '#25b3ff']}
                        borderColor={"#00296E"}
                    />
                    <HeadTop/>
                    <HeadBodyImage
                        imgSource={require('../assets/1x/ozgunes.png')}
                        locationX="center"
                        locationY="center"/>
                    <HeadBodyText
                        text={"ÖZGÜNEŞ SÜRÜCÜ KURSU"}
                        fontSize={15}
                        textcolor={"white"}
                        locationX="center"
                        locationY="flex-start"
                    />

                </View>
                <View style={styles.content}>
                    <View style={styles.contentFlex}>
                        <Content
                            imgSource={require('../assets/1x/Cine_Camera_PNG_Clip_Art-1685.png')}
                            circlebg={"#BEBEBE"}
                            ImagelocationX={"flex-start"}
                            ImagelocationY={"flex-start"}
                            Imgwidth={63}
                            Imgheight={60}
                            ImageMarginTop={0}
                            ImageMarginLeft={0}
                            text={`E-SINAV
TANITIM VİDEOSU`}
                            btntext={"HEMEN İZLE"}
                            btnbgColor={"black"}
                            btntextcolor={"white"}
                        />
                        <Content
                            imgSource={require('../assets/1x/play.png')}
                            circlebg={"#FBE7C7"}
                            Imgwidth={45}
                            Imgheight={40}
                            ImagelocationX={"center"}
                            ImagelocationY={"flex-start"}
                            ImageMarginTop={0}
                            ImageMarginLeft={0}
                            text={`DİREKSİYON
SINAVI VİDEOSU`}
                            btntext={"HEMEN İZLE"}
                            btnbgColor={"black"}
                            btntextcolor={"white"}
                        />
                    </View>
                    <View style={styles.contentFlex}>
                        <Content
                            imgSource={require('../assets/1x/motor.png')}
                            circlebg={"#2D8BA3"}
                            ImagelocationX={"center"}
                            ImagelocationY={"flex-start"}
                            Imgwidth={85}
                            Imgheight={60}
                            ImageMarginTop={0}
                            ImageMarginLeft={0}
                            text={`MOTOSİKLET
SINAV VİDEOSU`}
                            btntext={"HEMEN İZLE"}
                            btnbgColor={"black"}
                            btntextcolor={"white"}
                        />
                        <Content
                            imgSource={require('../assets/1x/book.png')}
                            circlebg={"black"}
                            ImagelocationX={"center"}
                            ImagelocationY={"center"}
                            Imgwidth={60}
                            Imgheight={55}
                            ImageMarginTop={0}
                            ImageMarginLeft={0}
                            text={`ONLİNE
KİTAP`}
                            btntext={"İNCELE"}
                            btnbgColor={"black"}
                            btntextcolor={"white"}
                        />
                    </View>
                    <View style={styles.contentFlex}>
                        <Content
                            imgSource={require('../assets/1x/student.png')}
                            circlebg={"#DD6513"}
                            ImagelocationX={"center"}
                            ImagelocationY={"flex-start"}
                            Imgwidth={70}
                            Imgheight={55}
                            ImageMarginTop={0}
                            ImageMarginLeft={0}
                            text={`EHLİYET
SINAVLARI`}
                            btntext={"Detaylı Bilgi"}
                            btnbgColor={"black"}
                            btntextcolor={"white"}
                        />
                        <Content
                            imgSource={require('../assets/1x/takvim.png')}
                            circlebg={"black"}
                            ImagelocationX={"flex-start"}
                            ImagelocationY={"flex-start"}
                            Imgwidth={60}
                            Imgheight={60}
                            ImageMarginTop={0}
                            ImageMarginLeft={0}
                            text={`EHLİYET
RANDEVUSU`}
                            btntext={"Randevu Al"}
                            btnbgColor={"black"}
                            btntextcolor={"white"}
                        />
                    </View>
                    <View style={styles.contentFlex}>
                        <Content
                            imgSource={require('../assets/1x/path.png')}
                            circlebg={"#F9B200"}
                            ImagelocationX={"center"}
                            ImagelocationY={"center"}
                            Imgwidth={50}
                            Imgheight={52}
                            ImageMarginTop={0}
                            ImageMarginLeft={0}
                            text={`EĞİTİM
ALANI`}
                            btntext={"Detaylı Bilgi"}
                            btnbgColor={"black"}
                            btntextcolor={"white"}
                        />
                        <Content
                            imgSource={require('../assets/1x/touch.png')}
                            circlebg={"#97A09B"}
                            ImagelocationX={"flex-start"}
                            ImagelocationY={"center"}
                            Imgwidth={40}
                            Imgheight={47}
                            ImageMarginTop={12}
                            ImageMarginLeft={12}
                            text={`ONLİNE
KAYIT`}
                            btntext={"Kayıt Ol"}
                            btnbgColor={"black"}
                            btntextcolor={"white"}
                        />
                    </View>
                    <View style={styles.contentFlex}>
                        <Content
                            imgSource={require('../assets/1x/lamb.png')}
                            circlebg={"#F1A81A"}
                            ImagelocationX={"center"}
                            ImagelocationY={"center"}
                            Imgwidth={70}
                            Imgheight={45}
                            ImageMarginTop={10}
                            ImageMarginLeft={0}
                            text={`TRAFİK
İŞARETLERİ`}
                            btntext={"Detaylı Bilgi"}
                            btnbgColor={"black"}
                            btntextcolor={"white"}
                        />
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
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: null,
    },
    content: {
        flex: 55,
        //backgroundColor: 'white',
    },
    contentFlex: {
        flex: 11,
        flexDirection: "row",
        //backgroundColor: 'red',
    },
    content3: {
        flex: 2,
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
});