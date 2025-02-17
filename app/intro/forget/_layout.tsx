import { Stack } from "expo-router";

export default function ForgetLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="forgetpassword" />
      <Stack.Screen name="contact-selection" />
      <Stack.Screen name="verification" />
      <Stack.Screen name="problemconnexion" />
      
    </Stack>
  );
}