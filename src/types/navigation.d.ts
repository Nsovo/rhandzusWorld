// src/types/navigation.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined; // No params expected
  WordSound: undefined; // No params expected
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

export interface HomeProps {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
}

export type WordSoundScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'WordSound'
>;
export type WordSoundScreenRouteProp = RouteProp<RootStackParamList, 'WordSound'>;

export interface WordSoundProps {
  navigation: WordSoundScreenNavigationProp;
  route: WordSoundScreenRouteProp;
}