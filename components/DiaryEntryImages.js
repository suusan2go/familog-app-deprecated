/* @flow */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';

import Swiper from 'react-native-swiper';

var styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 30,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});

const DiaryEntryImages = ({
  images,
}: {
  images: Array<{ id: number, uri: string }>,
}) => {
  console.log(images);
  return (
    <Swiper
      height={400}
      style={styles.wrapper}
      showsButtons={false}
      paginationStyle={{
        bottom: 0,
      }}
      buttonWrapperStyle={{
        backgroundColor: 'transparent',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {images.map(image => (
        <View style={styles.slide} key={image.id}>
          <Image
            resizeMode="contain"
            source={{ uri: image.uri }}
            style={{ flex: 1, width: Dimensions.get('window').width }}
          />
        </View>
      ))}
    </Swiper>
  );
};
export default DiaryEntryImages;
