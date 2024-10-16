// App.tsx
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Feed from './src/screens/Feed';

export default function App() {
  return (
    <SafeAreaProvider>
      <Feed />
    </SafeAreaProvider>
  );
}
