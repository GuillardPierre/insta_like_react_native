import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { Provider } from "react-redux";
import store from "./reducers/store";

export default function RootLayout() {
  return (
    <>
      <Provider store={store}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="profile" options={{ headerShown: false }} />
          <Stack.Screen name="message" options={{ headerShown: false }} />
          <Stack.Screen name="posts" options={{ headerShown: false }} />
        </Stack>
      </Provider>
      <StatusBar style="auto" />
    </>
  );
}
