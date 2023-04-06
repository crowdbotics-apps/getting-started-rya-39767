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
    }}><View style={styles.bMBXxNGG}><ImageBackground style={styles.shxtnSCs} source={require("./Logo.png")} resizeMode="cover"></ImageBackground></View></ScrollView>
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
    height: 87
  }
});
export default Untitled2;