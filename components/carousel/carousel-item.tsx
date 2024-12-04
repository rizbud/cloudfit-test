import { Image, StyleSheet, TouchableOpacity } from "react-native";

import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import { Data } from "../../types";
import { useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";

interface CarouselItemProps {
  item: Data;
  isActive: boolean;
  animationValue: SharedValue<number>;
}

interface Navigation {
  navigate: (screen: string, params: Data) => void;
}

export const CarouselItem = ({
  item,
  isActive,
  animationValue,
}: CarouselItemProps) => {
  const { navigate } = useNavigation<Navigation>();

  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [0.5, 1, 0.5]
    );

    return { opacity };
  }, []);

  return (
    <Animated.View style={[styles.item, animatedStyle]}>
      <SharedElement id={String(item.id)}>
        <TouchableOpacity
          activeOpacity={0.8}
          disabled={!isActive}
          onPress={() => navigate("Detail", item)}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </TouchableOpacity>
      </SharedElement>
    </Animated.View>
  );
};

export const styles = StyleSheet.create({
  item: {
    width: "100%",
    height: "auto",
    aspectRatio: 3 / 2,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
