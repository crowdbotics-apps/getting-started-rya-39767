import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.HZzdrKZZ}></View><View style={styles.XReJlCUD}><ImageBackground style={styles.QQlcSPWf} source={require("./Runners Background.png")} resizeMode="cover"><Pressable onPress={() => {
            navigation.navigate("Untitled2");
          }}><View style={styles.LkjHRURC}><Text style={styles.LmmCutLA}>Get Started</Text></View></Pressable></ImageBackground><ImageBackground style={styles.PiDrBUbX} source={require("./Description.png")} resizeMode="cover"></ImageBackground></View></ScrollView>
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
    height: 569,
    position: "absolute",
    top: 0,
    left: -4
  },
  ptfblCnZ: {
    width: 208,
    height: 112,
    position: "relative"
  },
  PiDrBUbX: {
    width: 288,
    height: 76,
    position: "absolute",
    left: 38,
    top: 386
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
    width: 208,
    backgroundColor: "#7b61ff",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    left: 76,
    top: 496
  },
  LmmCutLA: {
    width: 128,
    height: 43,
    lineHeight: 50,
    fontSize: 20,
    borderRadius: 0,
    fontFamily: "Nunito",
    color: "#ffffff",
    textAlign: "center",
    position: "absolute",
    top: 0,
    left: 40,
    fontWeight: "700"
  }
});
export default Untitled1;