import React, {useState} from 'react';
import {FlatList, SafeAreaView, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AntDesign as AddIcon} from '@expo/vector-icons';
import {deleteTodo, newTodo} from '../../../redux/todo/action';
import styles from './styles';
import ItemList from '../ItemList/index';
import SearchBar from "../FlatList/SearchBar";

const Index = () => {

    const dispatch = useDispatch();
    const list = useSelector(state => state);
    const [todo, setTodo] = useState('');

    function handleDeleteOnPress(id) {
        dispatch(deleteTodo(id));
    }

    function handleAddTodoOnPress() {
        dispatch(newTodo(todo));
        setTodo('');
    }

    function renderItem({item}) {
        return (
            <ItemList item={item.todo} onPress={handleDeleteOnPress}/>
        )
    }

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
                    data={list}
                    renderItem={renderItem}
                    style={styles.flatListView}
                />
            </SafeAreaView>
        </View>
    )
}
export default Index;
