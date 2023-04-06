import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.wZmNafIs} source={require("./Home Screen.png")} resizeMode="cover"><ImageBackground style={styles.llFEmOLl} source={require("./Home Top Info.png")} resizeMode="cover"><ImageBackground style={styles.RBzaNanE} source={require("./Bottom Navigation.png")} resizeMode="cover"></ImageBackground></ImageBackground><ImageBackground style={styles.kOakMSyj} source={require("./Share and get.png")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.OjXpzcof} source={require("./History Section.png")} resizeMode="cover"></ImageBackground></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  wZmNafIs: {
    width: 354,
    height: 576,
    position: "absolute",
    top: 0,
    left: 0
  },
  llFEmOLl: {
    width: 351,
    height: 372
  },
  kOakMSyj: {
    width: 315,
    height: 103,
    position: "absolute",
    top: 383,
    left: 18
  },
  OjXpzcof: {
    width: 306,
    height: 122,
    position: "absolute",
    top: 494,
    left: 21
  },
  DZbvFyHF: {
    width: 342,
    height: 38,
    position: "absolute",
    top: 554,
    left: -3
  },
  RBzaNanE: {
    width: 339,
    height: 60,
    position: "absolute",
    top: 507,
    left: 21
  }
});
export default Untitled3;