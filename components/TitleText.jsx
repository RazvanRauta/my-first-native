/*
 * @author: Razvan Rauta
 * Date: 13.01.2020
 * Time: 22:09
 */

import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'open-sans-bold',
    fontSize: 18
  }
});

const TitleText = ({ children, style }) => {
  return <Text style={{ ...styles.titleText, ...style }}>{children}</Text>;
};

export default TitleText;
