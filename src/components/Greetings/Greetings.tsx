import React from "react";
import { A } from "@expo/html-elements";
import { Text, View } from "react-native";

import styles from "./style";

const Greetings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greetingsText}>
        Привет! Это моё тестовое задание для компании
      </Text>
      <A style={[styles.greetingsText, styles.link]} href="https://www.mcn.ru/">
        MCN Telecom
      </A>
    </View>
  );
};

export default Greetings;
