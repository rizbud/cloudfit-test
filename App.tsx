import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import DetailScreen from "./screens/detail";
import HomeScreen from "./screens/home";

const Stack = createSharedElementStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false, gestureEnabled: false }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="Detail"
              component={DetailScreen}
              sharedElements={({ params }) => [
                {
                  id: String(params.id),
                  animation: "fade-in",
                  resize: "stretch",
                },
              ]}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
