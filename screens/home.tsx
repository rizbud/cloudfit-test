import { StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Carousel } from "../components";
import { DATA } from "../constants/data";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Carousel data={DATA} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});
