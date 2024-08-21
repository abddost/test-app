import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { handleColorTap } from '@services';

export default function HomeScreen() {
  const [bgColor, setBgColor] = useState<string>('#ffffff');
  const [colorCode, setColorCode] = useState<string>('RGB(255, 255, 255)');

  const handleTap = () => handleColorTap(setBgColor, setColorCode);
  
  return (
    <TouchableWithoutFeedback onPress={handleTap}>
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        <Text style={styles.text}>Hello there</Text>
        <Text style={styles.colorText}>{colorCode}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  colorText: {
    marginTop: 20,
    fontSize: 18,
    color: '#000',
  },
});