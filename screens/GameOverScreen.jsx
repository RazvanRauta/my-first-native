/*
 * @author: Razvan Rauta
 * Date: 13.01.2020
 * Time: 00:26
 */

import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Colors from '../constants/colors';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import success from '../assets/success.png';
import MainButton from '../components/MainButton';

const styles = StyleSheet.create({
  gameOverScreen: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  gameOverCard: {
    width: 300,
    height: 300,
    maxWidth: '80%',
    maxHeight: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  message: {
    marginVertical: 5,
    textAlign: 'center',
    fontSize: 20
  },
  image: {
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  },
  messageContainer: {
    marginHorizontal: 30,
    marginVertical: 15
  }
});

const GameOverScreen = ({ onRestart, rounds, userNumber }) => {
  return (
    <View style={styles.gameOverScreen}>
      <TitleText style={styles.message}>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={success} resizeMode="cover" />
      </View>
      <View style={styles.messageContainer}>
        <BodyText style={styles.message}>
          Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds to guess the
          number <Text style={styles.highlight}>{userNumber}</Text>.
        </BodyText>
      </View>
      <MainButton style={{ backgroundColor: Colors.accent }} onPress={() => onRestart()}>
        NEW GAME
      </MainButton>
    </View>
  );
};

export default GameOverScreen;
