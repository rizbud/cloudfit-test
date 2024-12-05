import { Image, StyleSheet, Text, View } from "react-native";

import { SharedElement } from "react-navigation-shared-element";

import { Data } from "../types";

interface DetailScreenProps {
  route: {
    params: Data;
  };
}

export default function DetailScreen({ route }: DetailScreenProps) {
  const { id, image, title } = route.params;

  return (
    <View style={styles.areaView}>
      <SharedElement id={String(id)}>
        <Image source={{ uri: image }} style={styles.image} />
      </SharedElement>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "auto",
    aspectRatio: 3 / 2,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
