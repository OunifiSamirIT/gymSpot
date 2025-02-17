import { Stack } from "expo-router";

export default function IntroLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="points" />
      <Stack.Screen name="gymlisting" />
      <Stack.Screen name="coachlisting" />
      <Stack.Screen name="marketplace" />
      <Stack.Screen name="homeauth" />
      <Stack.Screen name="login" />
      <Stack.Screen name="forget" />
    </Stack>
  );
}
