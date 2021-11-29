import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    }

    const result = tasks.find(({ title })=> title === newTaskTitle)

    if (result == null) {
      setTasks( oldData => [ ...oldData, data] );
    }
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    const updateTasks = tasks.map( task => ({...task}));
    const itemTask = updateTasks.find(item => item.id === id);

    if (itemTask) {
      itemTask.done = !itemTask.done;
      setTasks(updateTasks);
    } else {
      return;
    }
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks( oldData => oldData.filter(
			task => task.id !== id
		));
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})