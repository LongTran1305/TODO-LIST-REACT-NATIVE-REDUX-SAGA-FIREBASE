import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import { Foundation, AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { newTodo, deleteTodo } from '../../actions';


const Todo = () => {
      const dispatch = useDispatch();
      const list = useSelector(state => state);
      const [getText, setText] = useState('');


      const addTodo = (getText) => {
            dispatch(newTodo(getText));
      }

      const removeTodo = (id) => {
            dispatch(deleteTodo(id));
      }

      const renderItem = ({ item }) => {
            return (
                  <TouchableOpacity  >
                        <View style={styles.flatListItem} >
                              <Text style={styles.textItem}>{item.data}</Text>
                              <View>
                                    <Foundation name="x" size={24} color="black" onPress={() => removeTodo(item.key)} />
                              </View>
                        </View>
                  </TouchableOpacity>
            );
      }

      return (
            <View style={styles.container}>
                  <Text style={styles.title}>Todo</Text>
                  <View style={styles.inputContainer}>
                        <TextInput style={styles.textInput} placeholder='Enter todo' onChangeText={(text) => setText(text)} value={getText}></TextInput>
                        <AntDesign name="pluscircle" size={30} color="black" onPress={addTodo} disabled={getText == '' ? true : false} />
                  </View>
                  <FlatList
                        data={list}
                        renderItem={renderItem}
                        style={styles.flatListView}
                        keyExtractor={item => item.key.toString()}
                  />
            </View>
      )
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
      },
      title: {
            fontSize: 64,
            color: 'lightgrey',
            padding: 40,
      },
      inputContainer: {
            flexDirection: 'row',
            width: '80%',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
      },
      textInput: {
            borderColor: 'red',
            borderBottomWidth: 1,
            width: '80%',
            borderRadius: 10,
            fontSize: 16,
            padding: 10
      },
      flatListItem: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
            backgroundColor: 'orange',
            width: '80%',
            alignSelf: 'center',
            margin: 5,

      },
      flatListView: {
            width: '100%',
            paddingHorizontal: 5,
            margin: 10,
      },
      textItem: {
            fontSize: 24,
            color: '#FFFFFF'
      }
});

export default Todo;