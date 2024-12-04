import { useState } from "react";
import { useWindowDimensions, View } from "react-native";

import RNCarousel from "react-native-reanimated-carousel";

import { CarouselItem } from "./carousel-item";
import { Data } from "../../types";

interface CarouselProps {
  data: Data[];
}

export const Carousel = ({ data }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { width } = useWindowDimensions();

  return (
    <View style={{ flex: 1 }}>
      <RNCarousel
        data={data}
        renderItem={({ item, index, animationValue }) => (
          <CarouselItem
            item={item}
            key={item.id}
            isActive={index === activeIndex}
            animationValue={animationValue}
          />
        )}
        width={width}
        height={width * (9 / 16)}
        modeConfig={{
          parallaxScrollingScale: 0.85,
          parallaxAdjacentItemScale: 0.6,
        }}
        mode="parallax"
        loop={true}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
    </View>
  );
};
