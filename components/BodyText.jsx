/*
 * @author: Razvan Rauta
 * Date: 13.01.2020
 * Time: 21:54
 */

import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bodyText: {
    fontFamily: 'open-sans'
  }
});

const BodyText = ({ children, style }) => {
  return <Text style={{ ...styles.bodyText, ...style }}>{children}</Text>;
};

export default BodyText;
