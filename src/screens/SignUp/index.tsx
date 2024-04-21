import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppColor from '../../theme/AppColor';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppFonts from '../../theme/AppFonts';
import * as Animatable from 'react-native-animatable';
import { Button, Input } from 'native-base';
import { SignUpScreenProps } from '../../navigation/types';
const SignUpScreen = ({navigation}:SignUpScreenProps) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: AppColor.WHITE,
      }}>
      <View
        style={{
          marginTop: 50,
          marginLeft: '5%',
        }}>
        <Text
          style={{
            fontSize: 25,
            color: AppColor.WHITE,
            fontFamily: AppFonts.REGULAR,
            letterSpacing: 1.5,
          }}>
          Login
        </Text>
        <Text
          style={{
            fontSize: 25,
            color: AppColor.WHITE,
            fontFamily: AppFonts.MEDIUM,
            letterSpacing: 1.5,
            marginTop: 10,
          }}>
          To
        </Text>
        <Text
          style={{
            fontSize: 25,
            color: AppColor.WHITE,
            fontFamily: AppFonts.BOLD,
            letterSpacing: 1.5,
            marginTop: 10,
          }}>
          ChatApp
        </Text>
      </View>

        
        {/* TextField Email ,Password  */}
        
        <View style={{
            marginTop:120,
            width:'90%',
            alignSelf:'center',

        }}>
        
        <Input keyboardType='email-address' variant="underlined" placeholder="Your Email" focusOutlineColor={AppColor.PRIMARY} />
        <Input style={{
            marginTop:20
        }} type='password' variant="underlined" placeholder="Password" focusOutlineColor={AppColor.PRIMARY} />

        </View>

        {/* Login Button , Forgot Password */}

        <View style={{
            width:'90%',
            position:'absolute',
            bottom:10,
            alignSelf:'center'
        }}>
        <Button
        size="md"
        width={'100%'}
        alignSelf={'center'}
        marginTop={20}
        fontFamily={AppFonts.REGULAR}
        backgroundColor={AppColor.PRIMARY}
        android_ripple={{color: AppColor.SECONDARY}}
        onPress={() => {
          navigation.navigate('SignUpScreen');
        }}>
        Log In
      </Button>

      <Button
        size="md"
        alignSelf={'center'}
        variant={'link'}
        fontFamily={AppFonts.REGULAR}
        _text={{color:AppColor.SECONDARY}}
        onPress={() => {
          navigation.navigate('SignUpScreen');
        }}>
        Forgot Password
      </Button>
        </View>




        {/* Animation UI View  */}
      <Animatable.View
        animation={'zoomIn'}
        duration={600}
        style={{
          width: 300,
          height: 300,
          borderRadius: 120,
          backgroundColor: AppColor.PRIMARY,
          position: 'absolute',
          top: -50,
          left: -50,
          zIndex: -70,
        }}
      />

      <Animatable.View
        animation={'zoomIn'}
        duration={1000}
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          backgroundColor: AppColor.SECONDARY,
          position: 'absolute',
          top: -90,
          right: -40,
          zIndex: -90,
        }}
      />
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
