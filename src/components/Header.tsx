// src/Header.tsx

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Menu from './Menu';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    
    <View style={styles.header}>
        <Menu />

      <Text style={styles.headerText}>{title}</Text>
      <Image source={require('../assets/love.png')} style={styles.headerImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    paddingTop: 15,
    backgroundColor: '#6E276C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
  },
  headerImage: {
    width: 50,
    height: 50,
    position: 'absolute',
    right: 10,
  },
});

export default Header;
