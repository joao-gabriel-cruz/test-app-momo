import { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './style';
import { TextInput } from 'react-native-paper';
import Icon from '@expo/vector-icons/Ionicons';
import { theme } from '../../Style/theme';

interface TaskType {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [task, setTask] = useState<TaskType[]>([] as TaskType[]);

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          textColor={theme.white}
          right={
            <TextInput.Icon
              icon={() => (
                <Icon name="add" color={theme.primaryYellow} size={35} />
              )}
            />
          }
          placeholder="Adicione sua tarefá"
        />
      </View>
      {task.length === 0 ? (
        <View style={styles.boxInformation}>
          <Text style={styles.information}>
            Oiiii momo, Quando tiver colocar alguma tarefa elas ficaram aqui
          </Text>
        </View>
      ) : (
        <View>
          <TextInput placeholder="dsafsdf" />
        </View>
      )}
    </View>
  );
}
