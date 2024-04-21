import { LogBox, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './src/navigation/types';
import SplashScreen from './src/screens/splash';
import HomeScreen from './src/screens/home';
import { NativeBaseProvider } from 'native-base';
import SignInScreen from './src/screens/SignIn';
import SignUpScreen from './src/screens/SignUp';
import AppColor from './src/theme/AppColor';
import GetStartedScreen from './src/screens/getStarted';
const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.']);
  }, []);
  return (
    <NativeBaseProvider  >
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'SplashScreen'}
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'HomeScreen'}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'SignInScreen'}
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'SignUpScreen'}
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'GetStartedScreen'}
          component={GetStartedScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App

const styles = StyleSheet.create({})