import React, { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  Switch,
  View,
  Text,
} from "react-native";

import styles from "./styles";

import { IPhoto } from "../../redux/slices/types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getPhoto } from "../../redux/slices/photoSlice";
import selectPhotoState from "../../redux/selectors/photos";
import Card from "../../components/Card";

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const { photos, isLoading, page } = useAppSelector(selectPhotoState);
  const [isSorted, setIsSorted] = useState<boolean>(false);
  const [filtered, setFiltered] = useState<IPhoto[] | null>(null);

  useEffect(() => {
    if (photos.length === 0) {
      dispatch(getPhoto());
    }

    const photosCopy = [...photos];

    const filteredArr = photosCopy.sort(
      (a, b) => Number(b.liked) - Number(a.liked)
    );

    setFiltered(filteredArr);
  }, [isSorted, photos.length]);

  const handleChange = () => {
    setIsSorted(!isSorted);
  };

  const resetSorting = useCallback(() => {
    setIsSorted(false);
  }, []);

  const handleOnEndReached = () => {
    if (page !== undefined) {
      const nextPage = page + 1;

      dispatch(getPhoto(nextPage));
    }
  };

  const renderItem: ListRenderItem<IPhoto> = ({ item }) => {
    return (
      <Card
        resetSorting={resetSorting}
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
      <View style={styles.filterContainer}>
        <Text>Сортировать по лайкам</Text>
        <Switch value={isSorted} onChange={handleChange} />
      </View>
      <FlatList
        data={isSorted ? filtered : photos}
        onEndReachedThreshold={0.5}
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
