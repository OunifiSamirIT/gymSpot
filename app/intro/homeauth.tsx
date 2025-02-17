import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { router } from 'expo-router';

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.gymText}>GYM</Text>
        <Text style={styles.spotText}>SPOT</Text>
      </View>

      <View style={styles.iconContainer}>
        <Image
          source={require('../../assets/images/logogymOR.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.taglineContainer}>
        <Text style={styles.taglineText}>UNE SEULE APPLICATION</Text>
        <View style={styles.taglineRow}>
          <Text style={styles.taglineText}>POUR VOTRE </Text>
          <Text style={[styles.taglineText, styles.highlightText]}>VIE </Text>
          <Text style={styles.taglineText}>SPORTIVE</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable 
          style={styles.primaryButton} 
          onPress={() => router.push('/intro/login')}
        >
          <Text style={styles.buttonText}>Connexion</Text>
        </Pressable>

        <Pressable 
          style={styles.primaryButton} 
          // onPress={() => router.push('/signup')}
        >
          <Text style={styles.buttonText}>S'inscrire</Text>
        </Pressable>

        <Pressable 
          style={styles.googleButton} 
          onPress={() => console.log('Google login')}
        >
          <Image 
            source={require('../../assets/images/Google.png')} 
            style={styles.googleIcon} 
          />
          <Text style={styles.googleButtonText}>Se connecter avec Google</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    marginTop: 40,
  },
  gymText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  spotText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF8A00',
  },
  iconContainer: {
    marginTop: 60,
    marginBottom: 40,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
  },
  taglineContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  taglineRow: {
    flexDirection: 'row',
  },
  taglineText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  highlightText: {
    color: '#FF8A00',
  },
  buttonContainer: {
    width: '100%',
    gap: 15,
  },
  primaryButton: {
    backgroundColor: '#FF8A00',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  googleButton: {
    backgroundColor: '#FFF0E0',
    padding: 15,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  googleIcon: {
    width: 24,
    height: 24,
  },
  googleButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
  },
});