import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import NativeLibrary from '../../viewModal/nativeLibrary';
import { SplashScreenProps } from '../../navigation/types';
import * as Animatable from 'react-native-animatable';
const SplashScreen = ({navigation}:SplashScreenProps) => {
  const {AppColor, imageUrl} = NativeLibrary();
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('HomeScreen');
    },3000)
  },[]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColor.WHITE,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar backgroundColor={AppColor.SECONDARY} />
      <Animatable.Image
      easing={'ease-in-out'}
        animation={'bounceInUp'}
        source={imageUrl.AppLogo}
        style={{width: 250, height: 250
        }}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
