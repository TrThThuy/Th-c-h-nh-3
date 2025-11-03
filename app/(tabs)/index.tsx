import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AverageCalculator() {
  const [toan, setToan] = useState('');
  const [ly, setLy] = useState('');
  const [hoa, setHoa] = useState('');
  const [result, setResult] = useState('');

  const tinhDiem = () => {
    const avg = (parseFloat(toan) + parseFloat(ly) + parseFloat(hoa)) / 3;
    setResult(avg ? avg.toFixed(2) : 'Nhập đủ 3 điểm!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tính điểm trung bình</Text>
      <TextInput placeholder="Toán" keyboardType="numeric" style={styles.input} onChangeText={setToan} />
      <TextInput placeholder="Lý" keyboardType="numeric" style={styles.input} onChangeText={setLy} />
      <TextInput placeholder="Hóa" keyboardType="numeric" style={styles.input} onChangeText={setHoa} />
      <Button title="Tính điểm" onPress={tinhDiem} />
      <Text style={styles.result}>Kết quả: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', width: '80%', padding: 8, marginBottom: 10, borderRadius: 6 },
  result: { marginTop: 10, fontSize: 18, fontWeight: 'bold' },
});

