import React, { useEffect, useState } from "react";
import { FlatList, ListRenderItem, RefreshControl, View } from "react-native";

import { IPhoto } from "../../redux/slices/types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getPhoto } from "../../redux/slices/photoSlice";
import selectPhotoState from "../../redux/selectors/photos";

import Card from "../../components/Card";
import styles from "./styles";

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const [nextPage, setNextPage] = useState<number>(2);

  const { photos, isLoading } = useAppSelector(selectPhotoState);

  useEffect(() => {
    if (photos.length === 0) {
      dispatch(getPhoto());
    }
  }, []);

  const handleOnEndReached = () => {
    dispatch(getPhoto(nextPage)).then(() => {
      setNextPage((prev) => prev + 1);
    });
  };

  const renderItem: ListRenderItem<IPhoto> = ({ item }) => {
    return (
      <Card
        id={item.id}
        uri={item.src.tiny}
        description={item.alt}
        isLiked={item.liked}
      />
    );
  };

  const keyExtractor = (item: IPhoto) => item.id.toString();

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        maxToRenderPerBatch={3}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        refreshControl={<RefreshControl refreshing={isLoading} />}
        onEndReached={handleOnEndReached}
      />
    </View>
  );
};

export default HomeScreen;
