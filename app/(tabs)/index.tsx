import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { Button, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

type Student = {
  id: string;
  name: string;
  age: number;
};

type RootStackParamList = {
  StudentList: undefined;
  StudentDetail: { student: Student };
  AddStudent: { setStudents: React.Dispatch<React.SetStateAction<Student[]>> };
};

type StudentListNavProp = StackNavigationProp<RootStackParamList, 'StudentList'>;
type AddStudentNavProp = StackNavigationProp<RootStackParamList, 'AddStudent'>;

function StudentList({ navigation }: { navigation: StudentListNavProp }) {
  const [students, setStudents] = React.useState<Student[]>([
    { id: '1', name: 'Ngô Thế Quang Anh', age: 20 },
    { id: '2', name: 'Trần Thu Thuỷ', age: 21 },
  ]);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button title="Thêm sinh viên" onPress={() => navigation.navigate('AddStudent', { setStudents })} />
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('StudentDetail', { student: item })}>
            <Text style={{ fontSize: 18, marginVertical: 8 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

function StudentDetail({ route }: { route: { params: { student: Student } } }) {
  const { student } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>Tên: {student.name}</Text>
      <Text style={{ fontSize: 18, marginTop: 8 }}>Tuổi: {student.age}</Text>
    </View>
  );
}

function AddStudent({ route, navigation }: { route: { params: { setStudents: React.Dispatch<React.SetStateAction<Student[]>> } }; navigation: AddStudentNavProp }) {
  const { setStudents } = route.params;
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        placeholder="Tên sinh viên"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, padding: 8, marginVertical: 8 }}
      />
      <TextInput
        placeholder="Tuổi"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8, marginVertical: 8 }}
      />
      <Button
        title="Lưu"
        onPress={() => {
          if (name && age) {
            setStudents((prev) => [...prev, { id: Date.now().toString(), name, age: Number(age) }]);
            navigation.goBack();
          }
        }}
      />
    </View>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StudentList" component={StudentList} options={{ title: 'Danh sách sinh viên' }} />
        <Stack.Screen name="StudentDetail" component={StudentDetail} options={{ title: 'Chi tiết sinh viên' }} />
        <Stack.Screen name="AddStudent" component={AddStudent} options={{ title: 'Thêm sinh viên' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}