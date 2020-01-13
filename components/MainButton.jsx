/*
 * @author: Razvan Rauta
 * Date: 13.01.2020
 * Time: 22:54
 */

import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Color from '../constants/colors';

const styles = StyleSheet.create({
  mainButton: {
    backgroundColor: Color.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  text: {
    color: 'white',
    fontFamily: 'open-sans'
  }
});

const MainButton = ({ children, style, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={{ ...styles.mainButton, ...style }}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MainButton;
