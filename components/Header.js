import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";

function Header() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "grey", fontSize: 22, marginLeft: 10 }}>
        WhatApp
      </Text>
      <View style={styles.button}>
        <TouchableOpacity style={{ marginRight: 20 }}>
          <Fontisto name="search" size={20} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={20} color="grey" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
    container: {
    height: 60,
    width: "100%",
    backgroundColor: "#333",
    flexDirection: "row",
    alignItems: "center",
        justifyContent: "space-between",
    },
    
  button: {
    marginRight: 5,
    paddingRight: 5,
    flexDirection: "row",
  },
});
