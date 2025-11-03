import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function ProfileCard() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('./assets/chongiu.png')}
          style={styles.avatar}
        />
        <Text style={styles.name}>Trần Thu</Text>
        <Text style={styles.job}>Sinh viên CNTT</Text>
        <Text style={styles.contact}>📧 tranthuthuy17052009@gmail.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
    width: 250,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  job: {
    color: '#666',
    marginVertical: 4,
  },
  contact: {
    color: '#007AFF',
    marginTop: 6,
  },
});


