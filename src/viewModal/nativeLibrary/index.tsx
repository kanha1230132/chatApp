import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppColor from '../../theme/AppColor'
import { imageUrl } from '../../assets'
import { SvgUrl } from '../../assets';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const NativeLibrary = () => {
  return (
    {
      AppColor,
      imageUrl,
      SvgUrl,
      DrawerActions, useNavigation

    }
  )
}

export default NativeLibrary
