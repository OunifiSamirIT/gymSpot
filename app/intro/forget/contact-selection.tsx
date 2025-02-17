
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { router } from 'expo-router';

export default function ContactSelectionScreen() {
  const [selectedOption, setSelectedOption] = useState<'phone' | 'email' | null>(null);

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

      <View style={styles.shieldContainer}>
        <Image
          source={require('../../../assets/images/shieldpassword.png')}
          style={styles.shieldIcon}
        />
      </View>

      <Text style={styles.selectionText}>
        Select which contact detail should we use to reset your mot de passe
      </Text>

      <Pressable 
        style={[
          styles.contactOption,
          selectedOption === 'phone' && styles.selectedContactOption
        ]}
        onPress={() => setSelectedOption('phone')}
      >
        <View style={styles.contactIconContainer}>
          <Image 
            source={require('../../../assets/icons/email.png')}
            style={styles.contactIcon}
          />
        </View>
        <View style={styles.contactInfo}>
          <Text style={styles.contactType}>numero de telephone</Text>
          <Text style={styles.contactValue}>+216 *****XX</Text>
        </View>
      </Pressable>

      <Pressable 
        style={[
          styles.contactOption,
          selectedOption === 'email' && styles.selectedContactOption
        ]}
        onPress={() => setSelectedOption('email')}
      >
        <View style={styles.contactIconContainer}>
          <Image 
            source={require('../../../assets/icons/telf.png')}
            style={styles.contactIcon}
          />
        </View>
        <View style={styles.contactInfo}>
          <Text style={styles.contactType}>email</Text>
          <Text style={styles.contactValue}>XX****@gmail.com</Text>
        </View>
      </Pressable>

      <Pressable 
        style={[
          styles.button,
          !selectedOption && styles.buttonDisabled
        ]}
        onPress={() => {
          if (selectedOption) {
            router.push('/intro/forget/verification');
          }
        }}
      >
        <Text style={styles.buttonText}>Suivant</Text>
      </Pressable>
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
  shieldContainer: {
    alignItems: 'center',
    marginVertical: 20,
    paddingVertical: 50,
  },
  shieldIcon: {
    width: 180,
    height: 190,
  },
  selectionText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  contactOption: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 15,
    padding: 30,
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
  },
  selectedContactOption: {
    borderColor: '#FFF0E0',
    backgroundColor: '#FFF0E0',
  },
  contactIconContainer: {
    backgroundColor: '#FFF0E0',
    padding: 10,
    borderRadius: 10,
    marginRight: 15,
  },
  contactIcon: {
    width: 24,
    height: 24,
    tintColor: '#FF8A00',
  },
  contactInfo: {
    flex: 1,
  },
  contactType: {
    color: '#666666',
    fontSize: 14,
  },
  contactValue: {
    fontSize: 16,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#FF8A00',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: '#CCCCCC',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});