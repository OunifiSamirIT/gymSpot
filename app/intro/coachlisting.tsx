import React from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { router } from "expo-router";
import { ProgressDots } from "@/components/ProgressDots";

export default function CoachListingPage() {
  return (
    <View style={styles.container}>
 <View style={styles.titleContainer}>
        <Text style={[styles.title, styles.gymText]}>GYM</Text>
        <Text style={[styles.title, styles.spotText]}>SPOT</Text>
      </View>
      <Image
        resizeMode="contain"
        source={require("../../assets/images/coach1.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Coach listing</Text>
      <Text style={styles.description}>
        Nos coachs certifiés ont de la coach experience vous accompagneront dans
        votre vie sportive
      </Text>
      <ProgressDots totalDots={4} currentIndex={2} />

      <Pressable
        style={styles.button}
        onPress={() => router.push("/intro/marketplace")}
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
    marginTop: 70,
    width: "80%",
    maxWidth: 300,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  gymText: {
    color: "#000000",
  },
  spotText: {
    color: "#FF8A00",
  },
});
