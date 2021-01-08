import React, {useState} from 'react';
import {FlatList, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AntDesign} from '@expo/vector-icons';
import {deleteTodo, newTodo} from '../../../redux/actions';
import styles from './styles';
import ItemList from '../ItemList';

const Index = () => {
    const dispatch = useDispatch();
    const list = useSelector(state => state);
    const [todo, setTodo] = useState('');


    function handleDeleteOnPress(id) {
        dispatch(deleteTodo(id));
    }

    function addTodo() {
        dispatch(newTodo(todo));
        setTodo('');
    }

    function removeTodo(id) {
        dispatch(deleteTodo(id));
    }

    function renderItem(props) {
        // <ItemList item={props.item} onPress={handleDeleteOnPress}/>
        // return renderItem;
        return (
            <ItemList item={props.item} onPress={handleDeleteOnPress}/>
        );
    }

    const disabledIcon = todo === '';

    console.log(list);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter todo'
                    onChangeText={setTodo}
                    value={todo}/>
                <AntDesign
                    name="pluscircle"
                    size={30}
                    color="black"
                    onPress={addTodo}
                    disabled={disabledIcon}/>
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
export default Index;
