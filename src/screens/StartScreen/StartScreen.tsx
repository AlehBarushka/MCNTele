import { Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const StartScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text>StartScreen</Text>
    </View>
  );
};

export default StartScreen;
