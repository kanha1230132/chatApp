import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HomeScreenProps} from '../../navigation/types';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppColor from '../../theme/AppColor';
import AppFonts from '../../theme/AppFonts';
import {Avatar} from 'native-base';

const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: AppColor.PRIMARY,
      }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
          marginTop: 20,
          alignItems: 'center',
        }}>
        <Text></Text>
        <Text
          style={{
            color: AppColor.WHITE,
            fontFamily: AppFonts.REGULAR,
            fontSize: 23,
            textAlign: 'center',
          }}>
          Home
        </Text>
        <Avatar
          bg="green.500"
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}
        />
      </View>

      <View style={{
        flex:1,
        backgroundColor:AppColor.WHITE,
        borderTopEndRadius:25,
        borderTopStartRadius:25,
        elevation:5,
        marginTop:30
      }}>

        <View style={{
          flexDirection:'row',
          borderWidth:0.5,
          borderColor:AppColor.SECONDARY,
          marginTop:10,
          width:'90%',
          alignSelf:'center',
          alignItems:'center',
          borderRadius:10,
          paddingVertical:5,
          paddingHorizontal:5
        }}>

        <Avatar
          bg="green.500"
          width={10}
          height={10}
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}
        />

        <View style={{
          width:'60%',
          paddingLeft:10

        }}>
        <Text
          style={{
            color: AppColor.BLACK,
            fontFamily: AppFonts.REGULAR,
            fontSize: 17,
          }}>
          Kanhaiya Lal
        </Text>
        <Text
          style={{
            color: AppColor.BLACK,
            fontFamily: AppFonts.REGULAR,
            fontSize: 12,
          }}>
          How are you ?

        </Text>
        </View>

        <View style={{
          justifyContent:'flex-end',
          width:'25%'
        }}>
        <Text
          style={{
            color: AppColor.BLACK,
            fontFamily: AppFonts.REGULAR,
            fontSize: 14,
            textAlign:'right'
          }}>
          2 min ago
        </Text>
        <Text
          style={{
            width:15,
            height:15,
            color: AppColor.WHITE,
            fontFamily: AppFonts.REGULAR,
            fontSize: 12,
            backgroundColor:'red',
            alignSelf:'flex-end',
            textAlign:'center',
            borderRadius:10,
            marginTop:5
            
          }}>
          3
        </Text>
        </View>
        </View>


      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
