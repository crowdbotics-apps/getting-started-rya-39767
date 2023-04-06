import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.HZzdrKZZ}></View><View style={styles.XReJlCUD}><ImageBackground style={styles.QQlcSPWf} source={require("./Runners Background.png")} resizeMode="cover"><View style={styles.LkjHRURC}></View></ImageBackground><ImageBackground style={styles.PiDrBUbX} source={require("./Description.png")} resizeMode="cover"></ImageBackground></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  HZzdrKZZ: {
    height: 0,
    width: 358,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  XReJlCUD: {
    height: 574,
    width: 361,
    backgroundColor: "#28333f",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    top: 0,
    left: 1
  },
  QQlcSPWf: {
    width: 385,
    height: 528,
    position: "absolute",
    top: 66,
    left: -1
  },
  ptfblCnZ: {
    width: 208,
    height: 112,
    position: "relative"
  },
  PiDrBUbX: {
    width: 320,
    height: 89,
    position: "absolute",
    left: 19,
    top: 389
  },
  TfckuvOV: {
    width: 107,
    height: 62
  },
  DlfAdHgW: {
    width: 107,
    height: 62
  },
  LkjHRURC: {
    height: 42,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 8,
    color: "#777777",
    position: "absolute",
    left: 108,
    top: 439
  }
});
export default Untitled1;