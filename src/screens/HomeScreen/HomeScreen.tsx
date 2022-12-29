import React, { useEffect } from "react";
import { View, Text } from "react-native";

import { useAppDispatch } from "../../redux/hooks";
import { getPhoto } from "../../redux/slices/photoSlice";

const HomeScreen = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPhoto());
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
