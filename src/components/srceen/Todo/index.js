import React, {useEffect, useState} from 'react';

import {Alert, FlatList, Keyboard, SafeAreaView, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AntDesign as AddIcon} from '@expo/vector-icons';

import ItemList from './ItemList';

import {SET_ALL_TODO} from '../../../constant/actionTypes';

import styles from './styles';

import {newTodo} from '../../../redux/todo/action';

import firebaseCore from '../../../firebase';

const Todo = ({navigation}) => {
    const dispatch = useDispatch();
    const todoList = useSelector(state => state.todo.todoList);
    const [todo, setTodo] = useState('');
    const [todoItem, setTodoItem] = useState('');

    //disable addIcon when TextInput is empty
    const disabledIcon = todo === '';

    async function handleGetAll() {
        firebaseCore.todoRef()
            .onSnapshot(
                function (querySnapshot) {
                    const todoList = [];
                    querySnapshot.forEach(doc => {
                        const entity = doc.data()
                        entity.id = doc.id
                        todoList.push(entity);
                        dispatch({
                            type: SET_ALL_TODO,
                            payload: {
                                todoList,
                            }
                        })
                    });

                },
                error => {
                    alert('Something went wrong!')
                }
            );
    }

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

    function renderItem({item}) {
        return (
            <ItemList
                item={item.todo}
                deleteOnPress={() => handleDeleteOnPress(item.id)}
                editOnPress={() => editTodo({item})}
            />
        );
    }

    useEffect(() => {
        handleGetAll();
    }, []);


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter todo'
                    onChangeText={setTodo}
                    value={todo}/>
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
                    data={todoList}
                    renderItem={renderItem}
                    style={styles.flatListView}
                    keyExtractor={item => item.id.toString()}
                />
            </SafeAreaView>
        </View>
    )
}
export default Todo;
