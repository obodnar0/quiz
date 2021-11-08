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
            MAFIA
            </Text>
        </Card.Image>
    </Card>
        <Card containerStyle={styles.gameCard}>
            <Card.Image style={styles.cardImage} source={require('../assets/images/mafia-logo.jpg')}>
                <Text style={{fontSize: 50}}>
                MAFIA
                </Text>
            </Card.Image>
        </Card>
        <Card containerStyle={styles.gameCard}>
            <Card.Image style={styles.cardImage} source={require('../assets/images/mafia-logo.jpg')}>
                <Text style={{fontSize: 50}}>
                MAFIA
                </Text>
            </Card.Image>
        </Card>
        <Card containerStyle={styles.gameCard}>
            <Card.Image style={styles.cardImage} source={require('../assets/images/mafia-logo.jpg')}>
                <Text style={{fontSize: 50}}>
                MAFIA
                </Text>
            </Card.Image>
        </Card>
        <Card containerStyle={styles.gameCard}>
            <Card.Image style={styles.cardImage} source={require('../assets/images/mafia-logo.jpg')}>
                <Text style={{fontSize: 50}}>
                MAFIA
                </Text>
            </Card.Image>
        </Card>
        <Card containerStyle={styles.gameCard}>
            <Card.Image style={styles.cardImage} source={require('../assets/images/mafia-logo.jpg')}>
                <Text style={{fontSize: 50}}>
                MAFIA
                </Text>
            </Card.Image>
        </Card>
        <Card containerStyle={styles.gameCard}>
            <Card.Image style={styles.cardImage} source={require('../assets/images/mafia-logo.jpg')}>
                <Text style={{fontSize: 50}}>
                MAFIA
                </Text>
            </Card.Image>
        </Card>
        <Card containerStyle={styles.gameCard}>
            <Card.Image style={styles.cardImage} source={require('../assets/images/mafia-logo.jpg')}>
                <Text style={{fontSize: 50}}>
                MAFIA
                </Text>
            </Card.Image>
        </Card>
        <Card containerStyle={styles.gameCard}>
            <Card.Image style={styles.cardImage} source={require('../assets/images/mafia-logo.jpg')}>
                <Text style={{fontSize: 50}}>
                MAFIA
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
  gameCard: {
      borderRadius: 10,
      margin: 10,
      textAlign: 'center',
      padding: 0
  },
  cardImage: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  }
});
