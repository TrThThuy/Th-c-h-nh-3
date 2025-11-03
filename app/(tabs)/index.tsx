import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default function ChangeColorApp() {
  const [color, setColor] = useState('#ffffff');

  const randomColor = () => {
    const newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(newColor);
  };

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Button title="Đổi màu" onPress={randomColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});


