import React from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { router } from "expo-router";
import { ProgressDots } from "../../components/ProgressDots";

export default function GymListingPage() {
  return (
    <View style={styles.container}>
      <ProgressDots totalDots={4} currentIndex={1} />

      <Image
        resizeMode="contain"
        source={require("../../assets/images/globe.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Gym listing</Text>
      <Text style={styles.description}>
        Recherchez, localisez et accédez à de multiple gyms collaborés avec
        GYMSPOT
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => router.push("/intro/coachlisting")}
      >
        <Text style={styles.buttonText}>Commencer l'exploration</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 16,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#FF8A00",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: "80%",
    maxWidth: 300,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
