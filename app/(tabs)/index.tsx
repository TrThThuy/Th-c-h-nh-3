import React, { useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function TodoList() {
  const [task, setTask] = useState(''); 
  const [list, setList] = useState<{ id: string; title: string }[]>([]);

  const addTask = () => {
    const title = task.trim();
    if (!title) {
      Alert.alert('Lỗi', 'Vui lòng nhập công việc');
      return;
    }
    const newItem = { id: Date.now().toString(), title };
    setList(prev => [newItem, ...prev]); 
    setTask('');
    Keyboard.dismiss(); 
  };

  const deleteTask = (id: string) => {
    setList(prev => prev.filter(item => item.id !== id));
  };

  const renderItem = ({ item }: { item: { id: string; title: string } }) => (
    <TouchableOpacity
      onLongPress={() =>
        Alert.alert('Xóa công việc', `Bạn muốn xóa "${item.title}"?`, [
          { text: 'Hủy', style: 'cancel' },
          { text: 'Xóa', style: 'destructive', onPress: () => deleteTask(item.id) },
        ])
      }
    >
      <View style={styles.itemRow}>
        <Text style={styles.itemText}>• {item.title}</Text>
        <TouchableOpacity onPress={() => deleteTask(item.id)} style={styles.deleteBtn}>
          <Text style={styles.deleteTxt}>X</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách công việc</Text>

      <View style={styles.inputRow}>
        <TextInput
          placeholder="Nhập công việc..."
          value={task}
          onChangeText={setTask}
          style={styles.input}
          returnKeyType="done"
          onSubmitEditing={addTask}
        />
        <Button title="Thêm" onPress={addTask} />
      </View>

      <FlatList
        data={list}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.empty}>Chưa có công việc nào.</Text>}
        contentContainerStyle={list.length === 0 ? styles.flatEmpty : undefined}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  inputRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginRight: 8,
    borderRadius: 6,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  itemText: { fontSize: 16 },
  deleteBtn: { padding: 6, backgroundColor: '#f2f2f2', borderRadius: 6 },
  deleteTxt: { color: '#b00', fontWeight: 'bold' },
  empty: { textAlign: 'center', color: '#777' },
  flatEmpty: { flex: 1, justifyContent: 'center' },
});
