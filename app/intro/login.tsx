import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native';
import { router } from 'expo-router';

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Pressable 
        style={styles.backButton} 
        onPress={() => router.back()}
      >
        <Image 
          source={require('../../assets/icons/Arrowleft.png')} 
          style={styles.backIcon}
        />
      </Pressable>

      <Text style={styles.title}>Connexion</Text>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mot de passe</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              <Image 
                source={require('../../assets/icons/eye.png')}
                style={styles.eyeIcon}
              />
            </Pressable>
          </View>
        </View>

        <Pressable 
          style={styles.loginButton}
          onPress={() => console.log('Login')}
        >
          <Text style={styles.loginButtonText}>Connexion</Text>
        </Pressable>

        <Pressable 
          onPress={() => router.push('/intro/forget/problemconnexion')}
          
          style={styles.problemLink}
        >
          <Text style={styles.problemText}>Problèmes de connexion?</Text>
        </Pressable>
      </View>

      <View style={styles.socialContainer}>
        <Text style={styles.socialText}>Ou connectez-vous avec</Text>
        <View style={styles.socialButtons}>
          <Pressable style={styles.socialButton}>
            <Image 
            //   source={require('../../assets/images/facebook.png')}
              style={styles.socialIcon}
            />
          </Pressable>
          <Pressable style={styles.socialButton}>
            <Image 
              source={require('../../assets/images/Google.png')}
              style={styles.socialIcon}
            />
          </Pressable>
          <Pressable style={styles.socialButton}>
            <Image 
            //   source={require('../../assets/images/apple.png')}
              style={styles.socialIcon}
            />
          </Pressable>
        </View>
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