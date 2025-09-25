import { Stack } from "expo-router";

export default function PostsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          title: "",
          headerShown: true,
          headerBackTitle: "Retour",
        }}
      />
    </Stack>
  );
}
