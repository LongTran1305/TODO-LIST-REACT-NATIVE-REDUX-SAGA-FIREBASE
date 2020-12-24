import React, {useState} from 'react';
import {FlatList, SafeAreaView, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AntDesign as AddIcon} from '@expo/vector-icons';

import ItemList from './ItemList';

import {deleteTodo, editTodo, newTodo} from '../../../redux/todo/action';

import styles from './styles';


const Index = ({navigation}) => {
    const dispatch = useDispatch();
    const list = useSelector(state => state);
    const [todo, setTodo] = useState('');

    function handleDeleteOnPress(id){
        dispatch(deleteTodo(id));
    }

    function handleAddTodoOnPress(){
        dispatch(newTodo(todo));
        setTodo('');
    }

    function editTodo({item}){
       navigation.navigate('Edit', {item});
    }

    function renderItem ({item}){
        return (
            <ItemList
                item={item.todo}
                deleteOnPress={()=> handleDeleteOnPress(item.key)}
                editOnPress={()=> editTodo({item})}
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
                    value={todo}/>
                <AddIcon
                    name="pluscircle"
                    size={32}
                    color="black"
                    onPress={handleAddTodoOnPress}
                    disabled={disabledIcon}/>
            </View>
            <SafeAreaView>
                <FlatList
                    data={list.todo.todoList}
                    renderItem={renderItem}
                    style={styles.flatListView}
                    keyExtractor={item => item.key.toString()}
                />
            </SafeAreaView>
        </View>
    )
}
export default Index;
