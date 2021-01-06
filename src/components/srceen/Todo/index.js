import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Keyboard, SafeAreaView, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AntDesign as AddIcon} from '@expo/vector-icons';

import ItemList from './ItemList';

import styles from './styles';

import {deleteTodo, getTodo, newTodo} from '../../../redux/todo/action';

const Todo = ({navigation}) => {
    const dispatch = useDispatch();
    const todoList = useSelector(state => state.todo.todoList);
    const [todo, setTodo] = useState('');

    //disable addIcon when TextInput is empty
    const disabledIcon = todo === '';

    function handleDeleteTodoOnPress(id) {
        Alert.alert(
            "",
            "Are you sure you want to delete ?",
            [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                {text: "OK", onPress: () => dispatch(deleteTodo(id))}
            ],
            { cancelable: false }
        );
    }

    function handleAddTodoOnPress() {
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
                deleteOnPress={() => handleDeleteTodoOnPress(item.id)}
                editOnPress={() => editTodo({item})}
            />
        );
    }

    useEffect(() => {
        dispatch(getTodo());
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
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </View>
    )
}
export default Todo;
