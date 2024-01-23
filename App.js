import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GalleryPage from './GalleryPage';
import UploadPage from './UploadPage';
import PhotoDetailsPage from './PhotoDetailsPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Upload" screenOptions={{
          headerStyle: { backgroundColor: '#f0f0f0' },
          headerBackTitleStyle: { color: '#f0f0f0' },
          headerTintColor: '#f0f0f0',
        }}>
        <Stack.Screen name="Upload" component={UploadPage} options={{
            headerTitleStyle: { color: '#f0f0f0' },
            headerStyle: { backgroundColor: '#135' },
          }} />
        <Stack.Screen name="Gallery" component={GalleryPage} options={{
            headerTitleStyle: { color: '#f0f0f0' },
            headerStyle: { backgroundColor: '#135' },
          }} />
        <Stack.Screen name="PhotoDetails" component={PhotoDetailsPage} options={{
            headerTitleStyle: { color: '#f0f0f0' },
            headerStyle: { backgroundColor: '#135' },
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});