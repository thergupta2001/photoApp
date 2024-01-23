// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const GalleryPage = ({ route }) => {
//      const uploadedImages = route.params?.uploadedImages || [];
//      const navigation = useNavigation();
//      const [cloudinaryImages, setCloudinaryImages] = useState([]);

//      const fetchImages = async () => {
//           try {
//                const cloudName = 'dtkgxrrkj';
//                const apiKey = '724551727272949';
//                const apiSecret = 'mgHfVtAX1EZVP7OX6bhYAGndwf4'
//                const response = await fetch(`https://res.cloudinary.com/${cloudName}/image/list/uploaded.json`, {
//                     headers: {
//                          Authorization: `Bearer ${apiKey}:${apiSecret}`,
//                     },
//                })

//                if (!response.ok) {
//                     console.error('Response status:', response.status);
//                     console.error('Response text:', await response.text());
//                     throw new Error('Failed to fetch images');
//                }

//                const data = await response.json();
//                setCloudinaryImages(data.resources);
//           } catch (error) {
//                // console.error(error);
//                console.error(error.message)
//                // console.error(error.stack)
//                Alert.alert('Error', 'Failed to fetch images from Cloudinary');
//           }
//      };

//      useEffect(() => {
//           // fetchImages();
//      }, [])

//      const navigateToPhotoDetails = (photo) => {
//           navigation.navigate('PhotoDetails', { photo });
//      };

//      const renderImageCard = ({ item }) => (
//           <TouchableOpacity onPress={() => navigateToPhotoDetails(item)}>
//                <View style={styles.imageContainer}>
//                     <Image source={{ uri: item.file.uri }} style={styles.image} />
//                     <Text style={styles.title}>{item.title}</Text>
//                </View>
//           </TouchableOpacity>
//      );

//      return (
//           <View style={styles.container}>
//                {uploadedImages.length > 0 ? (
//                     <FlatList
//                          numColumns={3}
//                          data={cloudinaryImages}
//                          keyExtractor={(item) => item.id.toString()}
//                          renderItem={renderImageCard}
//                          contentContainerStyle={styles.flatListContainer}
//                     />
//                ) : (
//                     <Text>No images available</Text>
//                )}
//           </View>
//      );
// };

// const styles = StyleSheet.create({
//      container: {
//           flex: 1,
//           backgroundColor: '#123',
//      },
//      imageContainer: {
//           flex: 1,
//           margin: 8,
//           alignItems: 'center',
//           justifyContent: 'center',
//           backgroundColor: '#135',
//           borderWidth: 1,
//           borderColor: '#fff',
//           borderRadius: 8,
//           padding: 8,
//           marginRight: 1
//      },
//      flatListContainer: {
//           justifyContent: 'space-between',
//      },
//      image: {
//           width: 100,
//           height: 100,
//           borderRadius: 8,
//           marginBottom: 8,
//      },
//      title: {
//           textAlign: 'center',
//           color: "#fff"
//      },
// });

// export default GalleryPage;

import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GalleryPage = ({ route }) => {
  const uploadedImages = route.params?.uploadedImages || [];
  const navigation = useNavigation();

  const navigateToPhotoDetails = (photo) => {
    navigation.navigate('PhotoDetails', { photo });
  };

  const renderImageCard = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToPhotoDetails(item)}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.file.uri }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {uploadedImages.length > 0 ? (
        <FlatList
          numColumns={3}
          data={uploadedImages}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderImageCard}
          contentContainerStyle={styles.flatListContainer}
        />
      ) : (
        <Text>No images available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#123',
  },
  imageContainer: {
    flex: 1,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#135',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    padding: 8,
    marginRight: 1,
  },
  flatListContainer: {
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    textAlign: 'center',
    color: '#fff',
  },
});

export default GalleryPage;

