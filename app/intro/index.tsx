import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { router } from 'expo-router';

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/intro/points');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/gymspot-logo.png')}
        style={styles.logo}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.titleGym}>GYM</Text>
        <Text style={styles.titleSpot}>SPOT</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FF8A00',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    logo: {
      width: 150,
      height: 150,
      resizeMode: 'contain',
    },
    titleContainer: {
      flexDirection: 'row',
      marginTop: 20,
    },
    titleGym: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#000000',
    },
    titleSpot: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
  });
  