import { TextInput } from "react-native";
import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.bMBXxNGG}><ImageBackground style={styles.shxtnSCs} source={require("./Logo.png")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.PlqzcFjT} source={require("./Inputs.png")} resizeMode="cover"><TextInput style={styles.NOhETjbI} placeholder="Email" placeholderTextColor="#ffffff"></TextInput><TextInput style={styles.mIPARBqM} placeholder="Password" placeholderTextColor="#c0bbbb"></TextInput></ImageBackground><Text style={styles.pOICWndj}>Log In
        </Text><ImageBackground style={styles.kHLIxtzy} source={require("./Time:Connection:Battery.png")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.doQtIkjU} source={require("./Home Indicator - On Light.png")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.tgIsyHyl} source={require("./Social Media Buttons.png")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.zvpUHcFt} source={require("./Buttons.png")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.rsrVwEOr} source={require("./Headline 2.png")} resizeMode="cover"></ImageBackground></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  bMBXxNGG: {
    height: 576,
    width: 361,
    backgroundColor: "#28333f",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    top: 0,
    left: 0,
    borderColor: "#28333f"
  },
  shxtnSCs: {
    width: 87,
    height: 87,
    position: "absolute",
    top: 49,
    left: 137
  },
  PlqzcFjT: {
    width: 328,
    height: 165,
    position: "absolute",
    top: 187,
    left: 14
  },
  pOICWndj: {
    width: 100,
    height: 50,
    lineHeight: 50,
    fontSize: 14,
    borderRadius: 0,
    color: "#ffffff",
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
    top: 144,
    left: 127
  },
  NOhETjbI: {
    backgroundColor: "#2f3c50",
    borderColor: "#cccccc",
    width: 273,
    height: 48,
    position: "absolute",
    top: 6,
    left: 30
  },
  mIPARBqM: {
    backgroundColor: "#2f3c50",
    borderColor: "#cccccc",
    width: 237,
    height: 49,
    position: "absolute",
    top: 63,
    left: 26
  },
  kHLIxtzy: {
    width: 351,
    height: 32
  },
  doQtIkjU: {
    width: 107,
    height: 37,
    position: "absolute",
    left: 126,
    top: 531
  },
  tgIsyHyl: {
    width: 187,
    height: 67,
    position: "absolute",
    top: 425,
    left: 80
  },
  zvpUHcFt: {
    width: 280,
    height: 62,
    position: "absolute",
    top: 362,
    left: 39
  },
  rsrVwEOr: {
    width: 168,
    height: 21,
    position: "absolute",
    top: 509,
    left: 95
  }
});
export default Untitled2;