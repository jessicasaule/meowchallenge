import * as React from 'react';
import { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';

export default function StepOneScreen({}) {
  const [img, setImg] = useState("https://meowtel.com/img/assets/meowtel-cat-mascot-footer.png")
  
  let errorImg = "https://blogging-techies.com/wp-content/uploads/2020/06/Codigo-de-error-800f0922-en-Windows-10-FIX.jpg"

  const handlePress = async (color: string) => {
    try {
      let response = await fetch(
        `http://192.168.0.134:3001/?color=${color}`
      )

      const responseJson = await response.json();
      setImg(responseJson.data.img)

    } catch (error) {
      console.error(error)
    }
  }

  setImg("https://meowtel.com/img/assets/meowtel-cat-mascot-footer.png")

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Congrats! You solved the first two bugs. Now you should be able to touch a button and see a cat of that color</Text>
      <TouchableOpacity style={styles.button} onPress={() => handlePress('grey')}>
        <Text>Grey</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handlePress('white')}>
        <Text>White</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handlePress('brown')}>
        <Text>Brown</Text>
      </TouchableOpacity>
      <Image source={{uri: img ? img : errorImg}} style={{height: 100, width: 100, marginTop: 50}}/>
      <Text style={styles.warning}>Be careful if you go to StepTwo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button:{
    marginTop: 5,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: '80%'
  },
  warning:{
    color: 'red',
    marginTop: 80
  }
});
