import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Dimensions, ImageBackground, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';


var width = Dimensions.get('window').width;

export default function GamesList({ path }: { path: string }) {
  return (
<ScrollView style={styles.container}>
    <Card containerStyle={styles.gameCard}>
        <Card.Image style={styles.cardImage} source={require('../assets/images/mafia-logo.jpg')}>
            <Text style={{fontSize: 50}}>
            mafia
            </Text>
        </Card.Image>
    </Card>
        <Card containerStyle={styles.gameCard}>
            <Card.Image style={styles.cardImage} source={require('../assets/images/mafia-logo.jpg')}>
                <Text style={{fontSize: 50}}>
                mafia
                </Text>
            </Card.Image>
        </Card>
        <Card containerStyle={styles.gameCard}>
            <Card.Image style={styles.cardImage} source={require('../assets/images/mafia-logo.jpg')}>
                <Text style={{fontSize: 50}}>
                mafia
                </Text>
            </Card.Image>
        </Card>
        <Card containerStyle={styles.gameCard}>
            <Card.Image style={styles.cardImage} source={require('../assets/images/mafia-logo.jpg')}>
                <Text style={{fontSize: 50}}>
                mafia
                </Text>
            </Card.Image>
        </Card>
        <Card containerStyle={styles.gameCard}>
            <Card.Image style={styles.cardImage} source={require('../assets/images/mafia-logo.jpg')}>
                <Text style={{fontSize: 50}}>
                mafia
                </Text>
            </Card.Image>
        </Card>
        <Card containerStyle={styles.gameCard}>
            <Card.Image style={styles.cardImage} source={require('../assets/images/mafia-logo.jpg')}>
                <Text style={{fontSize: 50}}>
                mafia
                </Text>
            </Card.Image>
        </Card>
        <Card containerStyle={styles.gameCard}>
            <Card.Image style={styles.cardImage} source={require('../assets/images/mafia-logo.jpg')}>
                <Text style={{fontSize: 50}}>
                mafia
                </Text>
            </Card.Image>
        </Card>
        <Card containerStyle={styles.gameCard}>
            <Card.Image style={styles.cardImage} source={require('../assets/images/mafia-logo.jpg')}>
                <Text style={{fontSize: 50}}>
                mafia
                </Text>
            </Card.Image>
        </Card>
        <Card containerStyle={styles.gameCard}>
            <Card.Image style={styles.cardImage} source={require('../assets/images/mafia-logo.jpg')}>
                <Text style={{fontSize: 50}}>
                mafia
                </Text>
            </Card.Image>
        </Card>
    </ScrollView>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width
    },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  gameCard: {
      borderRadius: 10,
      margin: 10,
      textAlign: 'center',
      padding: 0
  },
  cardImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
