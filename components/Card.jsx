/*
 * @author: Razvan Rauta
 * Date: 12.01.2020
 * Time: 15:00
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    backgroundColor: 'white',
    elevation: 8,
    padding: 20,
    borderRadius: 10
  }
});

const Card = ({ children, style }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

export default Card;
