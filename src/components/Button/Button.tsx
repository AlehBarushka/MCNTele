import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

import { IButtonProps } from "./types";

const Button = ({ onPress, title, style, ...rest }: IButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btnContainer, style]}
      {...rest}
    >
      <Text style={styles.btnContent}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
