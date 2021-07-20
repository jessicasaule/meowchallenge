import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
const emoji = require('emoji-poop');

export default function StepTwoScreen() {

  //You should see this: https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/pile-of-poo_1f4a9.png
  // In your console
  console.log(emoji)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oops! Navigation tab is lost! Please look for it and make it shown again</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 60,
    color: 'white'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
