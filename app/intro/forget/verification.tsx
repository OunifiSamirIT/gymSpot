import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native';
import { router } from 'expo-router';

type InputRefs = (TextInput | null)[];

export default function VerificationScreen() {
  const [code, setCode] = useState<string[]>(['', '', '', '']);
  const inputRefs = useRef<InputRefs>([]);

  const handleNumberPress = (num: number | string) => {
    const currentEmptyIndex = code.findIndex(digit => digit === '');
    if (currentEmptyIndex !== -1) {
      const newCode = [...code];
      newCode[currentEmptyIndex] = num.toString();
      setCode(newCode);
      
      if (currentEmptyIndex < 3 && inputRefs.current[currentEmptyIndex + 1]) {
        inputRefs.current[currentEmptyIndex + 1]?.focus();
      }
    }
  };

  const handleBackspace = () => {
    const lastFilledIndex = code.map(digit => digit !== '').lastIndexOf(true);
    if (lastFilledIndex !== -1) {
      const newCode = [...code];
      newCode[lastFilledIndex] = '';
      setCode(newCode);
      
      if (inputRefs.current[lastFilledIndex]) {
        inputRefs.current[lastFilledIndex]?.focus();
      }
    }
  };

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

      <Text style={styles.codeText}>
        Code has been sent to +216 ******XX
      </Text>

      <View style={styles.codeInputContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref: TextInput | null) => inputRefs.current[index] = ref}
            style={[
              styles.codeInput,
              digit ? styles.codeInputFilled : null
            ]}
            value={digit}
            onChangeText={(value: string) => {
              const newCode = [...code];
              newCode[index] = value;
              setCode(newCode);
              
              if (value && index < 3) {
                inputRefs.current[index + 1]?.focus();
              }
            }}
            keyboardType="number-pad"
            maxLength={1}
            editable={false}
          />
        ))}
      </View>

      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>
          didn't receive your code ?{' '}
        </Text>
        <Text style={styles.resendText}>
          You can resend in <Text style={styles.resendTime}>55 s</Text>
        </Text>
      </View>

      <View style={styles.keypadContainer}>
        <View style={styles.keypad}>
          {([1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0] as const).map((num, index) => (
            <Pressable 
              key={index}
              style={styles.keypadButton}
              onPress={() => handleNumberPress(num)}
            >
              <Text style={styles.keypadText}>{num}</Text>
            </Pressable>
          ))}
          <Pressable 
            style={styles.keypadButton}
            onPress={handleBackspace}
          >
            <Image 
              source={require('../../../assets/icons/erase.png')} 
              style={styles.backspaceIcon}
            />
          </Pressable>
        </View>
      </View>

      <Pressable 
        style={[
          styles.verifyButton,
          code.every(digit => digit !== '') ? styles.verifyButtonActive : null
        ]}
        onPress={() => {
          if (code.every(digit => digit !== '')) {
            console.log('Verifying code:', code.join(''));
          }
        }}
      >
        <Text style={styles.verifyButtonText}>Verify</Text>
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
  codeText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#333333',
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  codeInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
    backgroundColor: '#FFFFFF',
  },
  codeInputFilled: {
    backgroundColor: '#FFF0E0',
    borderColor: '#FF8A00',
  },
  resendContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  resendText: {
    color: '#666666',
    fontSize: 14,
    lineHeight: 20,
  },
  resendTime: {
    color: '#FF8A00',
  },
  keypadContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    gap: 30,
    paddingHorizontal: 20,
  },
  keypadButton: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
  },
  keypadText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#333333',
  },
  backspaceIcon: {
    width: 24,
    height: 24,
  },
  verifyButton: {
    backgroundColor: '#CCCCCC',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  verifyButtonActive: {
    backgroundColor: '#FF8A00',
  },
  verifyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});