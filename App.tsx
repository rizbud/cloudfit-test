import { Easing } from "react-native";

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
              options={() => ({
                headerMode: "screen",
                headerShown: true,
                transitionSpec: {
                  open: {
                    animation: "timing",
                    config: {
                      duration: 300,
                      easing: Easing.bezier(0.35, 0.45, 0, 1),
                      useNativeDriver: true,
                    },
                  },
                  close: {
                    animation: "timing",
                    config: {
                      duration: 300,
                      easing: Easing.bezier(0.35, 0.45, 0, 1),
                      useNativeDriver: true,
                    },
                  },
                },
                cardStyleInterpolator: ({ current: { progress } }) => {
                  const opacity = progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                    extrapolate: "clamp",
                  });
                  return { cardStyle: { opacity } };
                },
                gestureEnabled: false,
                cardStyle: {
                  backgroundColor: "transparent",
                },
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
