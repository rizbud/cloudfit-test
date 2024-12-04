import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";

import { Data } from "../types";

interface DetailScreenProps {
  route: {
    params: Data;
  };
  navigation: any;
}

export default function DetailScreen({ route, navigation }: DetailScreenProps) {
  const { id, image, title } = route.params;

  const { top } = useSafeAreaInsets();

  return (
    <View style={styles.areaView}>
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.backBtn,
            {
              top: top + 12,
            },
          ]}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>

        <SharedElement id={String(id)}>
          <Image source={{ uri: image }} style={styles.image} />
        </SharedElement>
      </View>

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
  backBtn: {
    position: "absolute",
    left: 12,
    zIndex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 6,
    borderRadius: 999,
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
