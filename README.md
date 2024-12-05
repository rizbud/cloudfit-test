# CloudFit Technical Test

This is a technical test for CloudFit. The project is a simple React Native app that displays an interactive carousel of images with smooth animations. The carousel can be navigated by swiping left or right, and can also be tapped on the card to expand it with an animated transition.

## Demo

### Android

https://github.com/user-attachments/assets/93a9db83-3715-4430-bee7-c823fafc1ef9

### iOS

https://github.com/user-attachments/assets/8f618c61-ec04-4080-9749-6dcc3cb999b4

## Prerequisites

- Node v20.x
- React Native Environment. For full documentation refer to [React Native Docs](https://reactnative.dev/docs/0.74/set-up-your-environment).
- Ruby v2.7.5

## How to run the project

1. Clone the repository and navigate to the project directory

   ```bash
   git clone git@github.com:rizbud/cloudfit-test.git
   cd cloudfit-test
   ```

2. Install dependencies

   ```bash
   npm install
   ```

### Android

3. Open the Android emulator or connect to a physical device

4. Run the project

   ```bash
   npm run android
   ```

### iOS

3. Install bundler

   ```bash
   bundle install
   ```

4. Install pods

   ```bash
   cd ios
   bundle exec pod install
   ```

5. Open the iOS Simulator or connect to a physical device

6. Run the project

   ```bash
   npm run ios
   ```

## Dependencies Used

- Expo SDK 51
- React Navigation
- React Native Reanimated
- React Native Gesture Handler
- React Native Reanimated Carousel
- React Native Shared Element
- React Navigation Shared Element

## Why I chose these dependencies

I chose to use `react-native-reanimated-carousel`, `react-native-shared-element`, and `react-navigation-shared-element` for the carousel and transitions because they offer smooth animations and meet the project's requirements effectively. These libraries allowed me to avoid writing complex animations from scratch, saving time and ensuring a polished user experience.
