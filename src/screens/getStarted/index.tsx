import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import AppColor from '../../theme/AppColor';
import {imageUrl} from '../../assets';
import {Button} from 'native-base';
import AppFonts from '../../theme/AppFonts';
import {GetStartedScreenProps, HomeScreenProps} from '../../navigation/types';

const GetStartedScreen = ({navigation}: GetStartedScreenProps) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColor.WHITE,
        // justifyContent: 'center',
        // alignItems: 'center',
      }}>
      <StatusBar backgroundColor={AppColor.PRIMARY} />

      <Animatable.Image
        easing={'ease-in-out'}
        animation={'zoomIn'}
        source={imageUrl.AppLogo}
        style={{width: 150, height: 150, alignSelf: 'center'}}
      />

      <Animatable.Text
        animation={'slideInLeft'}
        delay={100}
        style={{
          fontSize: 60,
          fontFamily: AppFonts.MEDIUM,
          color: AppColor.PRIMARY,
          letterSpacing: 1.2,
          marginHorizontal: '5%',
        }}>
        Connect
      </Animatable.Text>
      <Animatable.Text
        animation={'slideInLeft'}
        delay={100}
        style={{
          fontSize: 60,
          fontFamily: AppFonts.MEDIUM,
          color: AppColor.LIGHT_GREY,
          letterSpacing: 1.2,
          marginHorizontal: '5%',
        }}>
        Friends
      </Animatable.Text>
      <Animatable.Text
        animation={'slideInLeft'}
        delay={100}
        style={{
          fontSize: 60,
          fontFamily: AppFonts.MEDIUM,
          color: AppColor.PRIMARY,
          letterSpacing: 1.2,
          marginHorizontal: '5%',
        }}>
        Easily &
      </Animatable.Text>
      <Animatable.Text
        animation={'slideInLeft'}
        delay={100}
        style={{
          fontSize: 60,
          fontFamily: AppFonts.MEDIUM,
          color: AppColor.LIGHT_GREY,
          letterSpacing: 1.2,
          marginHorizontal: '5%',
        }}>
        Quickly
      </Animatable.Text>

      <Animatable.Text
        animation={'slideInLeft'}
        delay={100}
        style={{
          fontSize: 18,
          fontFamily: AppFonts.MEDIUM,
          color: AppColor.SECONDARY,
          letterSpacing: 1.2,
          marginHorizontal: '5%',
          marginTop: 25,
        }}>
        Instantly send and receive messages in real-time, making conversations
        seamless and natural.
      </Animatable.Text>

      <Button
        size="md"
        width={'90%'}
        alignSelf={'center'}
        marginTop={20}
        fontFamily={AppFonts.REGULAR}
        backgroundColor={AppColor.PRIMARY}
        android_ripple={{color: AppColor.SECONDARY}}
        onPress={() => {
          navigation.navigate('SignUpScreen');
        }}>
        Sign Up With Mail
      </Button>

      <Animatable.Text
        animation={'slideInUp'}
        delay={100}
        style={{
          fontSize: 15,
          fontFamily: AppFonts.MEDIUM,
          color: AppColor.SECONDARY,
          letterSpacing: 1.2,
          alignSelf: 'center',
          marginTop: 20,
        }}>
        Already Account ?{' '}
        <Animatable.Text
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}
          style={{
            fontSize: 15,
            fontFamily: AppFonts.MEDIUM,
            color: AppColor.PRIMARY,
            letterSpacing: 1.2,
            alignSelf: 'center',
            marginTop: 20,
          }}>
          Log In
        </Animatable.Text>
      </Animatable.Text>
    </View>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({});
