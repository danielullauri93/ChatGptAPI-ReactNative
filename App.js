import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import AppNavigation from './src/navigation';
import {apiCall} from './src/api/openAI';
export default function App() {
  useEffect(() => {
    // apiCall('create an image or a dog playing with cat');
  }, []);
  return <AppNavigation />;
}
