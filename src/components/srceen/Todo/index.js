import React, { useState } from 'react';
import { FlatList, Text, TextInput, View, ScrollView, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { deleteTodo, newTodo } from '../../../redux/actions';
import styles from './styles';
import ItemList from '../ItemList';

const Index = () => {
    const dispatch = useDispatch();
    const list = useSelector(state => state);
    const listOfTodo = Object.keys(list).map((key) => [String(key), list[key]]);
    // const listOfTodo = list ? Object.values(list) : []
    const [todo, setTodo] = useState('');
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];


    console.log(list);
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

    const renderItem = (props) => {
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <Text>{props.key}</Text>
                </View>
                <View>
                    <Text>{props.title}</Text>
                </View>
            </View>
        );
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
                    value={todo} />
                <AntDesign
                    name="pluscircle"
                    size={30}
                    color="black"
                    onPress={addTodo}
                    disabled={disabledIcon} />
            </View>

            <SafeAreaView style={{ width: '100%', height: 400, alignItems: 'center', flex: 1 }}>
                <FlatList
                    data={list}
                    renderItem={renderItem}
                    style={styles.flatListView}
                    keyExtractor={item => item.key}
                />
            </SafeAreaView>
        </View>
    )
}
export default Index;
