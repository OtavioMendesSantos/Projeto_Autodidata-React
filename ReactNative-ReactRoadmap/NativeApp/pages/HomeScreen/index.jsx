import React from "react";
import { Button, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import { Image, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://i.pinimg.com/236x/64/a3/1c/64a31c07d24a39eabf788c6aad76e344.jpg",
        }}
        style={{ width: "100%", height: 400 }}
      />
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("VideoGalery")}
        style={styles.button}
      >
        <Text>Video Galery</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    width: "100%",
    height: 300,
  },
  button: {
    marginTop: 20,
    backgroundColor: "aliceblue",
    height: 40,
    width: 150,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default HomeScreen;
