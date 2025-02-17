
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native';
import { router } from 'expo-router';

export default function ForgetPasswordScreen() {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Image 
            source={require('../../../assets/icons/Arrowleft.png')} 
            style={[styles.backIcon, styles.orangeTint]} 
          />
          <Text style={styles.headerText}>Mot de passe oublié</Text>
        </Pressable>
      </View>

      <Text style={styles.title}>Mot de passe oublié</Text>
      
      <Text style={styles.description}>
        Veuillez indiquer l'adresse e-mail utilisée pour votre inscription
      </Text>
      
      <Text style={styles.description}>
        Nous vous enverrons un e-mail pour changer votre mot de passe
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Votre e-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <Pressable 
        style={styles.button}
        onPress={() => router.push('/intro/forget/contact-selection')}
      >
        <Text style={styles.buttonText}>Réinitialisez votre mot de passe</Text>
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
  header: {
    marginTop: 20,
    marginBottom: 30,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  orangeTint: {
    tintColor: '#FF8A00',
  },
  headerText: {
    fontSize: 16,
    color: '#FF8A00',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 10,
  },
  inputContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 25,
    padding: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FF8A00',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
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