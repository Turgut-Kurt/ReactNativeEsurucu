import React, { Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default class LoadingPage extends Component {
  render() {

    return (
      <View style={styles.container} >
          <View style={styles.top}>
              <Image
                  source={require('../assets/1x/e-surucu2.png')}
                  style={{ width: 200, height: 200, resizeMode: 'center',}}
              />
          </View>
          <View style={styles.middle1}>
              <Text >YÜKLENİYOR...</Text>
          </View>
          <View style={styles.middle2}>
              <Image
                  source={require('../assets/1x/Layer2.png')}
                  style={{ width: "100%", height: "100%", resizeMode: 'center',}}
              />
          </View>
          <View style={styles.bottom}>
              <Text>www.e-surucu.com</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor: "#ffffff",
    },
    top:{
        flex:4,

        justifyContent:"flex-end",
        alignItems:"center",
    },
    middle1:{
        alignItems:"center",
        justifyContent:"center"
    },
    middle2 : {
        flex:4,

    },
    bottom:{
        flex:1,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
    }
});