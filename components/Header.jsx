/*
 * @author: Razvan Rauta
 * Date: 12.01.2020
 * Time: 13:55
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../constants/colors';
import TitleText from './TitleText';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: 'black'
  }
});

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{title}</TitleText>
    </View>
  );
};

export default Header;
