import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  SplashScreen: undefined;
  HomeScreen: undefined;
  DashBoardScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  GetStartedScreen: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'HomeScreen'
>;

export type SplashScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SplashScreen'
>;

export type SignInScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SignInScreen'
>;

export type SignUpScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SignUpScreen'
>;

export type GetStartedScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'GetStartedScreen'
>;