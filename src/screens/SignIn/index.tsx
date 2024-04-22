import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppColor from '../../theme/AppColor'
import AppFonts from '../../theme/AppFonts'

const SignInScreen = () => {
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
          Sign Up
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

      </SafeAreaView>
  )
}

export default SignInScreen

const styles = StyleSheet.create({})