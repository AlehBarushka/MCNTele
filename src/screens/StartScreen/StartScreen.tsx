import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { NavigationType } from "../../navigation/types";
import styles from "./styles";

import { Screens } from "../../constants/screens";
import Greetings from "../../components/Greetings";
import Button from "../../components/Button";

const StartScreen = () => {
  const insets = useSafeAreaInsets();
  const navigate = useNavigation<NavigationType>();

  const handleNavigateToHome = () => {
    navigate.navigate(Screens.home);
  };

  const handleNavigateToAbout = () => {
    navigate.navigate(Screens.about);
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Greetings />
      <View style={styles.btnWrapper}>
        <Button onPress={handleNavigateToAbout} title={"Подробнее"} />
        <Button onPress={handleNavigateToHome} title={"К заданию"} />
      </View>
    </View>
  );
};

export default StartScreen;
