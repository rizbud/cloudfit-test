import { Image, StyleSheet, TouchableOpacity } from "react-native";

import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import { Data } from "../../types";

interface CarouselItemProps {
  item: Data;
  isActive: boolean;
  animationValue: SharedValue<number>;
}

export const CarouselItem = ({
  item,
  isActive,
  animationValue,
}: CarouselItemProps) => {
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
      <TouchableOpacity activeOpacity={0.8} disabled={!isActive}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </TouchableOpacity>
    </Animated.View>
  );
};

export const styles = StyleSheet.create({
  item: {
    width: "100%",
    height: "auto",
    aspectRatio: 16 / 9,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
