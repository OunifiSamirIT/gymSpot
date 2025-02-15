import { Stack } from "expo-router";

export default function IntroLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />

      <Stack.Screen name="firstpage" />
      <Stack.Screen name="points" />
      <Stack.Screen name="gymlisting" />
      <Stack.Screen name="coachlisting" />
      <Stack.Screen name="marketplace" />
    </Stack>
  );
}
