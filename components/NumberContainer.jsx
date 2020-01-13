/*
 * @author: Razvan Rauta
 * Date: 12.01.2020
 * Time: 21:58
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Color from '../constants/colors';
import BodyText from './BodyText';

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 2,
    borderColor: Color.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: Color.accent,
    fontSize: 22
  }
});

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.numberContainer}>
      <BodyText style={styles.number}>{children}</BodyText>
    </View>
  );
};

export default NumberContainer;
