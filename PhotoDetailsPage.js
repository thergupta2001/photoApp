// PhotoDetailsPage.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PhotoDetailsPage = ({ route }) => {
  const {photo} = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: photo.file.uri }} style={styles.image} />
      <Text style={styles.title}>Title:</Text>
      <View style={styles.horizontalLine} />
      <Text style={styles.titletext}>{photo.title}</Text>
      <Text style={styles.title}>Description:</Text>
      <View style={styles.horizontalLine} />
      <Text style={styles.titletext}>{photo.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titletext: {
    color: 'white',
    marginBottom: 25
  },
  horizontalLine: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#123',
    padding: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  textContainer: {
    backgroundColor: '#123',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: 'white',
  },
});

export default PhotoDetailsPage;
