import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import { ICardProps } from "./types";
import { useAppDispatch } from "../../redux/hooks";
import { deletePhoto, likeToggle } from "../../redux/slices/photoSlice";

const Card = React.memo(({ uri, description, isLiked, id }: ICardProps) => {
  const dispatch = useAppDispatch();

  const handleLikeToggle = (id: number) => {
    dispatch(likeToggle(id));
  };

  const handleDelete = (id: number) => {
    dispatch(deletePhoto(id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.desc}>{description}</Text>

      <Image source={{ uri }} style={styles.image} />
      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <TouchableOpacity onPress={() => handleLikeToggle(id)}>
            {isLiked ? (
              <AntDesign name="heart" size={24} color="black" />
            ) : (
              <AntDesign name="hearto" size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity onPress={() => handleDelete(id)}>
            <AntDesign name="delete" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
});

export default Card;
