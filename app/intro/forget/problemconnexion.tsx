import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native';
import { router } from 'expo-router';

export default function ConnectionProblemScreen() {
  return (
    <View style={styles.container}>
      <Pressable 
        style={styles.backButton} 
        onPress={() => router.back()}
      >
        <Image 
          source={require('../../../assets/icons/Arrowleft.png')} 
          style={styles.backIcon}
        />
      </Pressable>

      <Text style={styles.title}>Probleme de connexion</Text>
      <Text style={styles.subtitle}>selectionnez un probleme</Text>

      <Pressable 
        style={styles.problemOption}
        onPress={() => router.push('/intro/forget/forgetpassword')}
      >
        <Text style={styles.problemOptionText}>J'ai oublié mon mot de passe</Text>
        <Image 
          source={require('../../../assets/icons/arroworange.png')}
          style={styles.arrowIcon}
        />
      </Pressable>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          en vous inscrivant , vous acceptez nos{' '}
          <Text style={styles.link}>Conditions generales d'utilisation</Text>
          {' '}et notre{' '}
          <Text style={styles.link}>Politique de confidentialité</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  backButton: {
    backgroundColor: '#EEEEEE',
    borderRadius: 50,
    width: '10%',
    marginTop: 20,
    padding: 10,
    marginBottom: 20,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 30,
  },
  form: {
    gap: 20,
    marginTop: 20,
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    color: '#000000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 25,
    padding: 15,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 25,
    paddingRight: 15,
  },
  passwordInput: {
    flex: 1,
    borderWidth: 0,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
  loginButton: {
    backgroundColor: '#FF8A00',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  problemLink: {
    alignItems: 'center',
    padding: 10,
  },
  problemText: {
    color: '#666666',
    textDecorationLine: 'underline',
  },
  socialContainer: {
    marginTop: 'auto',
    alignItems: 'center',
    gap: 20,
  },
  socialText: {
    color: '#666666',
  },
  socialButtons: {
    flexDirection: 'row',
    gap: 20,
  },
  socialButton: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 25,
    padding: 15,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  problemOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  problemOptionText: {
    fontSize: 16,
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
  footer: {
    marginTop: 'auto',
    padding: 20,
  },
  footerText: {
    textAlign: 'center',
    color: '#666666',
    fontSize: 14,
  },
  link: {
    color: '#FF8A00',
    textDecorationLine: 'underline',
  },
});
