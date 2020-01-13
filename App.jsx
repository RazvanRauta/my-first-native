import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import OpenSans from './assets/fonts/OpenSans-Regular.ttf';
import OpenSansBold from './assets/fonts/OpenSans-Bold.ttf';

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

const fetchFonts = () => {
  return Font.loadAsync({
    // eslint-disable-next-line global-require
    'open-sans': OpenSans,
    // eslint-disable-next-line global-require
    'open-sans-bold': OpenSansBold
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = numberOfRounds => {
    setGuessRounds(numberOfRounds);
  };

  const restartHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  let content = <StartGameScreen startGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen onGameOver={gameOverHandler} userChoice={userNumber} />;
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen userNumber={userNumber} rounds={guessRounds} onRestart={restartHandler} />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}
