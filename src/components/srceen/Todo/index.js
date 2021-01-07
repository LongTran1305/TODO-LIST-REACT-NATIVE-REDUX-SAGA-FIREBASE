import React, {useEffect, useState} from 'react';
import {FlatList, Keyboard, SafeAreaView, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AntDesign as AddIcon} from '@expo/vector-icons';

import ItemList from './ItemList';
import Alert from '../../Alert';

import styles from './styles';

import {deleteTodo, getTodo, newTodo} from '../../../redux/todo/action';
import {setLoadingPopup} from "../../../redux/loading/action";

const Todo = ({navigation}) => {
    const dispatch = useDispatch();
    const todoList = useSelector(state => state.todo.todoList);
    const [todo, setTodo] = useState('');

    //disable addIcon when TextInput is empty
    const disabledIcon = todo === '';

    function handleDeleteTodoOnPress(id) {
        Alert(id, handleDispatchDeleteTodoOnPress)

    }

    function handleDispatchDeleteTodoOnPress(id) {
        dispatch(deleteTodo(id));
    }

    function handleAddTodoOnPress() {
        dispatch(newTodo(todo));
        setTodo('');
        Keyboard.dismiss();
    }

    function handleEditTodoScreen({item}) {
        navigation.navigate('Edit', {item});
    }

    function renderItem({item}) {
        return (
            <ItemList
                item={item}
                deleteOnPress={handleDeleteTodoOnPress}
                editOnPress={handleEditTodoScreen}
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
