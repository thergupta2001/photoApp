// import React, { useState } from 'react';
// import { View, Text, Button, Image, Alert, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { useNavigation } from '@react-navigation/native';
// import { useRoute } from '@react-navigation/native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#123'
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: 'white'
//   },
//   imagePickerButton: {
//     backgroundColor: '#ddd',
//     padding: 10,
//     marginBottom: 20,
//     borderRadius: 4
//   },
//   selectedImage: {
//     width: 200,
//     height: 200,
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 20,
//     width: '80%',
//     backgroundColor: '#fff'
//   },
//   uploadButton: {
//     backgroundColor: '#007BFF',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   uploadButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//   },
//   goBackButton: {
//     backgroundColor: '#ddd',
//     padding: 10,
//     borderRadius: 5,
//   },
//   headingdes: {
//     color: 'white',
//     margin: 50,
//     fontSize: 40
//   }
// });

// const UploadPage = () => {
//   const navigation = useNavigation();
//   const route = useRoute();

//   const [selectedImage, setSelectedImage] = useState(null);
//   const [uploadedImages, setUploadedImages] = useState([]);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [1, 1],
//       quality: 1,
//     });

//     // JSON.stringify(result, null, 2);

//     if (!result.canceled) {
//       setSelectedImage(result.assets[0]);
//     }
//   };

//   const handleUpload = () => {
//     if (!selectedImage || !title || !description) {
//       Alert.alert('Please fill in all fields');
//       return;
//     }

//     const photo = {
//       id: Date.now(),
//       file: { uri: selectedImage.uri },
//       title,
//       description,
//     };

//     const updatedImages = [...uploadedImages, photo];

//     setUploadedImages(updatedImages);

//     Alert.alert('Photo uploaded successfully')

//     setSelectedImage(null);
//     setTitle('');
//     setDescription('');

//     navigation.navigate('Gallery', { uploadedImages: updatedImages });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headingdes}>WELCOME!</Text>

//       <Text style={styles.heading}>Upload Page</Text>
//       <TouchableOpacity
//         style={styles.imagePickerButton}
//         onPress={pickImage}
//       >
//         <Text>Pick an image from gallery</Text>
//       </TouchableOpacity>
//       {selectedImage && (
//         <Image source={{ uri: selectedImage.uri }} style={styles.selectedImage} />
//       )}
//       <TextInput
//         style={styles.input}
//         placeholder="Title"
//         value={title}
//         onChangeText={(text) => setTitle(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Description"
//         value={description}
//         onChangeText={(text) => setDescription(text)}
//       />
//       <TouchableOpacity
//         style={styles.uploadButton}
//         onPress={handleUpload}
//       >
//         <Text style={styles.uploadButtonText}>Upload</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.goBackButton}
//         onPress={() => navigation.navigate('Gallery', {uploadedImages})}
//       >
//         <Text>Go to Gallery</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default UploadPage

import React, { useState } from 'react';
import { View, Text, Image, Alert, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import cloudinary from './cloudinaryConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#123'
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white'
  },
  imagePickerButton: {
    backgroundColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    borderRadius: 4
  },
  selectedImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '80%',
    backgroundColor: '#fff'
  },
  uploadButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  uploadButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  goBackButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  headingdes: {
    color: 'white',
    margin: 50,
    fontSize: 40
  }
});

const UploadPage = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [selectedImage, setSelectedImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [uploadedImages, setUploadedImages] = useState([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedImage || !title || !description) {
      Alert.alert('Please fill in all fields');
      return;
    }

    try {
      const photo = {
        id: Date.now(),
        file: { uri: selectedImage.uri },
        title,
        description,
      };

      const updatedImages = [...uploadedImages, photo];

      setUploadedImages(updatedImages);

      const formData = new FormData();
      formData.append('file', { uri: selectedImage.uri, name: 'image.jpg', type: 'image/jpg' });
      formData.append('upload_preset', 'nlnkazku'); // Replace with your Cloudinary upload preset name
      formData.append('context', `title=${title}|description=${description}`);

      const response = await fetch('https://api.cloudinary.com/v1_1/dtkgxrrkj/image/upload', {
        method: 'POST',
        body: formData,
      });

      const uploadResponse = await response.json();

      // Handle the Cloudinary upload response as needed
      // console.log('Cloudinary Upload Response:', uploadResponse);

      Alert.alert('Photo uploaded successfully');

      // Clear form fields
      setSelectedImage(null);
      setTitle('');
      setDescription('');

      // Optional: Navigate to Gallery or handle navigation as needed
      navigation.navigate('Gallery', {uploadedImages: updatedImages});
    } catch (error) {
      console.error('Error uploading to Cloudinary:', error);
      Alert.alert('Error uploading photo');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headingdes}>WELCOME!</Text>

      <Text style={styles.heading}>Upload Page</Text>
      <TouchableOpacity style={styles.imagePickerButton} onPress={pickImage}>
        <Text>Pick an image from gallery</Text>
      </TouchableOpacity>
      {selectedImage && <Image source={{ uri: selectedImage.uri }} style={styles.selectedImage} />}
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
        <Text style={styles.uploadButtonText}>Upload</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => navigation.navigate('Gallery', {uploadedImages})}
      >
        <Text>Go to Gallery</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UploadPage