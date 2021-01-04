import React, { useEffect, useState } from 'react';

import { firebase } from '../../../firebase/firebase';
// import todoRef from '../../../firebase/firebase';

import { Alert, FlatList, SafeAreaView, Text, TextInput, View, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign as AddIcon } from '@expo/vector-icons';

import ItemList from './ItemList';

import styles from './styles';

import { deleteTodo, newTodo } from '../../../redux/todo/action';

const Todo = ({ navigation }) => {
    // const dispatch = useDispatch();
    // const list = useSelector(state => state);
    const [todo, setTodo] = useState('');
    const [todoItem, setTodoItem] = useState('');
    const db = firebase.firestore();
    const todoRef = db.collection("Todo");

    useEffect(() => {
        todoRef
            .onSnapshot(
                querySnapshot => {
                    const newEntities = []
                    querySnapshot.forEach(doc => {
                        const entity = doc.data()
                        entity.id = doc.id
                        newEntities.push(entity)
                    });
                    setTodoItem(newEntities)
                },
                error => {
                    console.log(error)
                }
            )
    }, [])

    function handleDeleteOnPress(id) {
        Alert.alert(
            "",
            "Are you sure you want to delete ?",
            [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                // { text: "OK", onPress: () => dispatch(deleteTodo(id)) }
                { text: "OK", onPress: () => todoRef.doc(id).delete() }
            ],
            { cancelable: false }
        );
    }


    async function handleAddTodoOnPress() {
        dispatch(newTodo(todo));

        setTodo('');
        Keyboard.dismiss();
    }

    function editTodo({ item }) {
        navigation.navigate('Edit', { item });
    }

    function renderItem({ item }) {
        return (
            <ItemList
                item={item.todo}
                deleteOnPress={() => handleDeleteOnPress(item.id)}
                editOnPress={() => editTodo({ item })}
            />
        );
    }

    //disable addIcon when TextInput is empty
    const disabledIcon = todo === '';
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter todo'
                    onChangeText={setTodo}
                    value={todo} />
                <AddIcon
                    name="pluscircle"
                    size={32}
                    color="black"
                    onPress={handleAddTodoOnPress}
                    disabled={disabledIcon}
                />
            </View>
            <SafeAreaView>
                <FlatList
                    // data={list.todo.todoList}
                    data={todoItem}
                    renderItem={renderItem}
                    style={styles.flatListView}
                    keyExtractor={item => item.id.toString()}
                />
            </SafeAreaView>
        </View>
    )
}
export default Todo;
