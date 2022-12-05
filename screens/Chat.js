import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";

function Chat() {
  return (
    <View style={styles.container}>
      <Text>
        chat
     </Text>
    </View>
  );
}

export default Chat;

const styles = StyleSheet.create({
    container: {
      flex:1,
    width: "100%",
    top: "20%",
    height: "100%",
    backgroundColor: "red",
  },
    contact: {
    height: "35%",
        width: "100%",
    paddingRight: "50%",
    backgroundColor: "#333",
    alignItems: "center",
    flexDirection:"row",
    justifyContent: "space-around",
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 50,
    },
    chat: {
        marginRight: 70,
  }
});
