/*
 * @author: Razvan Rauta
 * Date: 12.01.2020
 * Time: 15:30
 */

import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10
  }
});

const Input = ({ style, ...otherProps }) => {
  return <TextInput {...otherProps} style={{ ...styles.input, ...style }} />;
};

export default Input;
